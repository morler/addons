#ifndef _STDAFX_HPP_
#define _STDAFX_HPP_

#define WINVER				0x0500
#define _WIN32_WINNT		0x0501
#define WIN32_LEAN_AND_MEAN

#include <windows.h>

#include <atlbase.h>
#include <atlstr.h>
#include <atltypes.h>
#define _WTL_NO_WTYPES
#define _WTL_NO_UNION_CLASSES
#define _WTL_NO_CSTRING

#include <atlapp.h>
extern CComModule _Module;

#include <atlstr.h>
#include <atldlgs.h>
#include <atlimage.h>


#include "eesdk.h"

void ATLTRACER(const TCHAR* format, ...);

#endif
