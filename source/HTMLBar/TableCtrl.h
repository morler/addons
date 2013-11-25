#pragma once

class CTableCtrl : public CWindowImpl<CTableCtrl>
{
public:
    DECLARE_WND_CLASS(NULL)

    CPoint m_ptMouse;
    BOOL m_bTrackingMouse;
    TEXTMETRIC m_tm;
	CString m_strText;

	HFONT m_font;
	HWND m_hEdit;

    CTableCtrl()
    {
        m_ptMouse.x=m_ptMouse.y=-1;
        m_bTrackingMouse=FALSE;
    }
   
    BEGIN_MSG_MAP(CTableCtrl)
        MESSAGE_HANDLER(WM_LBUTTONDOWN, OnLButtonDown)
        MESSAGE_HANDLER(WM_MOUSEMOVE, OnMouseMove)
        MESSAGE_HANDLER(WM_MOUSELEAVE, OnMouseLeave)
        MESSAGE_HANDLER(WM_ERASEBKGND, OnEraseBkgnd)
        MESSAGE_HANDLER(WM_KILLFOCUS, OnKillFocus)
        MESSAGE_HANDLER(WM_PAINT, OnPaint)
    END_MSG_MAP()

    LRESULT OnLButtonDown(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM /*lParam*/, BOOL& bHandled)
    {
		if( m_ptMouse.x!=-1 && m_ptMouse.y!=-1 && m_hEdit ){
			m_strText.Empty();
			m_strText.Append(_T("<table>\n"));
			int w=m_ptMouse.x+1; w=min(w, 10);
			int h=m_ptMouse.y+1; h=min(h, 10);
			for( int i=0; i<h; i++ )
			{
				m_strText.Append(_T("\t<tr>\n"));
				for( int j=0; j<w; j++ )
				{
					if( i==0 && j==0 )
						m_strText.Append(_T("\t\t<td>$0</td>\n"));
					else
						m_strText.Append(_T("\t\t<td></td>\n"));
				}
				m_strText.Append(_T("\t</tr>\n"));
			}
			m_strText.Append(_T("</table>\n"));
			::SendMessage(m_hEdit, ECM_INSERTSNIPPET, (WPARAM)(LPCTSTR)m_strText, m_strText.GetLength());
			ShowWindow(SW_HIDE);
		}
        return 0;
    }

    LRESULT OnKillFocus(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM /*lParam*/, BOOL& bHandled)
    {
        ShowWindow(SW_HIDE);
        bHandled=FALSE;
        return 0;
    }

    LRESULT OnPaint(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM /*lParam*/, BOOL& /*bHandled*/)
    {
        CPaintDC _dc(m_hWnd);
        CMemoryDC dc(_dc.m_hDC, _dc.m_ps.rcPaint);
       
        RECT rcClient;
        GetClientRect(&rcClient);
        dc.FillSolidRect(&rcClient, RGB(255,255,255));
        RECT rcCell=rcClient;
       
        dc.SelectFont( m_font );
        dc.GetTextMetrics( &m_tm);
        rcCell.bottom -= (m_tm.tmHeight+2);

        const int count=10;
        const int m=2;
        const int w=(rcCell.right-rcCell.left)/count;
        const int h=(rcCell.bottom-rcCell.top)/count;
       
        for( int i=0; i<count; i++ )
        {
            for( int j=0; j<count; j++ ){
                CRect rc( w*j, h*i, (j+1)*w, (i+1)*h );
                rc.DeflateRect(1,1);
               
                dc.Rectangle(&rc);
                if( j<=m_ptMouse.x && i<=m_ptMouse.y )
                    dc.FillSolidRect(&rc, RGB(0, 0, 192));
            }
        }

        if( m_ptMouse.x!=-1 ){
            RECT rcText=rcClient;
            rcText.top=rcCell.bottom;
            TCHAR szText[16]={0};
            SecureHelper::sprintf_x(szText, 8, L"%d x %d", m_ptMouse.x+1, m_ptMouse.y+1);
            dc.DrawText(szText, lstrlen(szText), &rcText, DT_VCENTER|DT_CENTER|DT_SINGLELINE);
        }
        return 0;
    }

    LRESULT OnEraseBkgnd(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM lParam, BOOL& /*bHandled*/)
    {
        return 1;
    }

    LRESULT OnMouseLeave(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM lParam, BOOL& /*bHandled*/)
    {
        m_bTrackingMouse=FALSE;
        m_ptMouse.x=m_ptMouse.y=-1;
        //Invalidate();
		ShowWindow(SW_HIDE);
        return 0;
    }

    LRESULT OnMouseMove(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM lParam, BOOL& /*bHandled*/)
    {
        CPoint pt(GET_X_LPARAM(lParam), GET_Y_LPARAM(lParam));
        RECT rcClient;
        if( GetClientRect(&rcClient) ){
            if(!m_bTrackingMouse){
                TRACKMOUSEEVENT tme;
                tme.cbSize = sizeof(tme);
                tme.hwndTrack = m_hWnd;
                tme.dwFlags = /*TME_HOVER|*/TME_LEAVE;
                //tme.dwHoverTime = HOVER_DEFAULT;
                m_bTrackingMouse = TrackMouseEvent(&tme);
            }
            RECT rcCell=rcClient;

            rcCell.bottom -= (m_tm.tmHeight+2);

            const int count=10;
            const int w=(rcCell.right-rcCell.left)/count;
            const int h=(rcCell.bottom-rcCell.top)/count;

            m_ptMouse.x=min(pt.x/w, count-1);
            m_ptMouse.y=min(pt.y/h, count-1);
            InvalidateRect(&rcClient);
        }
   
        return 0;
    }
};
