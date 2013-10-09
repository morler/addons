##Open Files
EverEdit will open small files into memory directly. For some big files, EverEdit will use the disk as buffer to reduce memory use. You can change this threshold through performance settings.(Preference->Editor->Performance)

If you are trying to loading a very big file, EverEdit will displayed a value to indicates current loading percent. You could close this document to cancel loading operation at any time.
##Supported encodings
EverEdit fully supports a variety of common encodings such ash gb213/big/shift-jis and so on, EverEdit will not be garbled on inputting chars with IME.

**Notes:**For performance awareness, Everedit doesn't support gb18030(4 byte encoding) now.

##Encoding detection
EverEdit could detect common encodings on opening file and ensure that you are using the best encoding to open your files. For example, if you are using gb2312 in Japanese environment and your files are encoded by gb2312, EverEdit will displayed text with gb2312 while not shift-jis.

Encoding detection waste a littile memory, you can change this threshold through performance settings.
##Convert encoding
There are 2 ways to convert current document's encoding from A to B.

1. Save as and select new encoding.
2. MainMenu->Document->Convert Encoding, and then select your expected encoding, save.

Once you saved you files, the document will be changed physically.
##Reload files with selected encoding
Encoding detection may not be 100% correct. If you find the file was opened with an incorrect encoding, you can change the encoding by clicking status bar's encoding area. Reloading will not change the file physically.

##UTF-8
UTF-8 has a BOM configuration and EverEdit supports both UTF-8 with BOM or without BOM.

##Remove BOM quickly
Click status bar's encoding area and check/uncheck BOM setting will add/remove BOM quickly. If current file doesn't support BOM, the BOM item will be gray.

