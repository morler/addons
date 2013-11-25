#pragma once

enum
{
	LINE_COUNT=18,
	COL_COUNT=12,
	BOX_SIZE=16,
};

class CHtmlColorCtrl : public CWindowImpl<CHtmlColorCtrl>
{
	COLORREF GetWebColor(DWORD dw);

public:
	DECLARE_WND_CLASS(NULL)

	CPoint m_ptMouse;
	BOOL m_bTrackingMouse;
	BOOL m_bOnButton;
	COLORREF m_clr;
	HWND m_hEdit;
	HFONT m_font;
	CString m_strInsert;

	CHtmlColorCtrl();
	BEGIN_MSG_MAP(CHtmlColorCtrl)
		MESSAGE_HANDLER(WM_LBUTTONDOWN, OnLButtonDown)
		MESSAGE_HANDLER(WM_MOUSEMOVE, OnMouseMove)
		MESSAGE_HANDLER(WM_MOUSELEAVE, OnMouseLeave)
		MESSAGE_HANDLER(WM_ERASEBKGND, OnEraseBkgnd)
		MESSAGE_HANDLER(WM_KILLFOCUS, OnKillFocus)
		MESSAGE_HANDLER(WM_PAINT, OnPaint)
	END_MSG_MAP()

	LRESULT OnLButtonDown(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM /*lParam*/, BOOL& bHandled);
	LRESULT OnKillFocus(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM /*lParam*/, BOOL& bHandled);
	LRESULT OnPaint(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM /*lParam*/, BOOL& /*bHandled*/);
	LRESULT OnEraseBkgnd(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM lParam, BOOL& /*bHandled*/);
	LRESULT OnMouseLeave(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM lParam, BOOL& /*bHandled*/);
	LRESULT OnMouseMove(UINT /*uMsg*/, WPARAM /*wParam*/, LPARAM lParam, BOOL& /*bHandled*/);
};
