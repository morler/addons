#include "stdafx.h"
#include "HTMLBar.h"
#include "TableCtrl.h"
#include "ColorCtrl.h"

int HelloHTMlBar(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText)
{
	::MessageBox(pContext->hMain, lpText, L"HTMLBar", MB_OK);
	return 0;
}

int HTMLTable(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText)
{
	static CTableCtrl ctrl;
	if( !ctrl.IsWindow() ){
		ctrl.Create(pContext->hMain, 0, NULL, WS_POPUP | WS_BORDER | WS_CLIPSIBLINGS | WS_CLIPCHILDREN);
		ctrl.m_font=(HFONT)::SendMessage(pContext->hMain, EEM_GETUIFONT, 0, 0);
	}

	HWND hWnd=(HWND)::SendMessage(pContext->hMain, EEM_GETACTIVETEXT, 0, 0);
	if( hWnd ){
		ctrl.m_hEdit=hWnd;
		ctrl.SetWindowPos(NULL, lpRect->left, lpRect->bottom, 182, 200, SWP_NOACTIVATE|SWP_SHOWWINDOW);
	}
	return 0;
}

int HTMLColor(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText)
{
	static CHtmlColorCtrl ctrl;
	if( !ctrl.IsWindow() ){
		ctrl.Create(pContext->hMain, 0, NULL, WS_POPUP | WS_BORDER | WS_CLIPSIBLINGS | WS_CLIPCHILDREN);
		ctrl.m_font=(HFONT)::SendMessage(pContext->hMain, EEM_GETUIFONT, 0, 0);
	}

	HWND hWnd=(HWND)::SendMessage(pContext->hMain, EEM_GETACTIVETEXT, 0, 0);
	if( hWnd ){
		if( lpText )
			ctrl.m_strInsert=lpText;
		else
			ctrl.m_strInsert.Empty();

		ctrl.m_hEdit=hWnd;
		ctrl.SetWindowPos(NULL, lpRect->left, lpRect->bottom, 194, 326, SWP_NOACTIVATE|SWP_SHOWWINDOW);
	}
	return 0;
}


int HTMLImage(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText)
{
	CFileDialog dlg(FALSE, NULL, NULL, OFN_HIDEREADONLY | OFN_FILEMUSTEXIST, _T("Image Files(*.jpg;*.jpeg;*.jpe;*.png;*.gif;*.bmp)\0*.jpg;*.jpeg;*.jpe;*.png;*.gif;*.bmp\0All Files(*.*)\0*.*\0\0"));

	if( dlg.DoModal(pContext->hMain)==IDOK )
	{
		int w=-1;
		int h=-1;
		CImage img;
		if( img.Load( dlg.m_szFileName )==S_OK )
		{
			w=img.GetWidth();
			h=img.GetHeight();
			img.Destroy();
		}

		CString strText;
		if( w!=-1 )
			strText.Format(_T("<img src=\"%s\" width=\"%d\" height=\"%d\" border=\"0\" alt=\"$0\">"), dlg.m_szFileName, w, h);
		else
			strText.Format(_T("<img src=\"%s\" width=\"\" height=\"\" border=\"0\" alt=\"$0\">"), dlg.m_szFileName);

		HWND hWnd=(HWND)::SendMessage(pContext->hMain, EEM_GETACTIVETEXT, 0, 0);
		if( hWnd )
			::SendMessage(hWnd, ECM_INSERTSNIPPET, (WPARAM)(LPCTSTR)strText, strText.GetLength());
	}
	return 0;
}

int HTMLText(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText)
{
	return 0;
}

CComModule _Module;

BOOL APIENTRY DllMain( HMODULE hModule,
                       DWORD  ul_reason_for_call,
                       LPVOID lpReserved
					 )
{
	//MessageBox(NULL, L"ok", L"Error", MB_OK);
	switch (ul_reason_for_call)
	{
	case DLL_PROCESS_ATTACH:
	case DLL_THREAD_ATTACH:
		/*_Module.Init(NULL, hModule);
		OleInitialize(NULL);*/
		break;
	case DLL_THREAD_DETACH:
	case DLL_PROCESS_DETACH:
		/*OleUninitialize();
		_Module.Term();*/
		break;
	}
	return TRUE;
}