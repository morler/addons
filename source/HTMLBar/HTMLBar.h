#pragma once

#ifdef HTMLBAR_EXPORTS
#define HTMLBAR_API __declspec(dllexport)
#else
#define HTMLBAR_API __declspec(dllimport)
#endif

extern "C"{
	HTMLBAR_API int HTMLTable(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText);
	HTMLBAR_API int HTMLColor(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText);
	HTMLBAR_API int HTMLImage(EE_Context* pContext, LPRECT lpRect, LPCTSTR lpText);
};
