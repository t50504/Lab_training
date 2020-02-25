# Welcome Cosbi lab !

## Skill you should have:
- Linux system operation.
- python in data processing.
- Web framework(Django or ASP).
- Web front end language (html,css,javascripts).

### Linux system operation
#### Introduction
- 實驗室伺服器及外面公司伺服器大多都是linux系統，比起windows有以下好處:
開源、多用戶多任務、穩定及高效、安全。
___As a programmer,you should learn work on linux!___
- 伺服器中分為管理者與使用者，管理者就是天神，可以對伺服器做任何事。使用者則權限有限，僅對自己帳號下的資料夾有百分百權限。
- 在管理者創建帳號給使用者後，就可以透過pietty(putty)等ssh連線工具及filezila檔案傳輸工具，遠端連到伺服器並在linux系統下工作及檔案傳輸。

#### basic operation
- mkdir/rm -r:創建/刪除 資料夾。
- cd、cd..:進入退出資料夾。
- vi:文件編輯器，後+filename則可以直接創建並編寫。
(i進入編輯模式，esc離開編輯模式、:wq存檔並退出、其他請自行琢磨)
- cp a b: 複製檔案a為檔案b。
- mv a b: 移動檔案a到位置b。
- 其他請自行多研究，還有很多實用語法。
- exercise1:
請創建test1、test2 folder，並進入test1創建practice.txt內容隨意。複製此檔案命名為practice2.txt，並將practice2 move到test2 folder。
- exercise2:
將連結中[]的.py檔載下來，並透過filezila傳到你的linux資料夾。執行此python檔案。

### Python in data processing
- python是容易上手的高階程式語言，套件多、應用層面廣。處理資料簡單方便。是一種直譯式語言，在執行時由機器動態逐行直譯成機器看得懂的語言，因此較直覺；比起常見的C/C++等編譯式語言，是透過預先定義資料型別等等，再由編譯器轉為機器看得懂的語言來說，效能會較差，但對於非底層開發者來說，python在應用端的表現已經非常足夠。
- 而在大量數據處理來說，須熟悉基本python語法、numpy套件、pandas套件。就可以應付大部分的工作!下面附上莫煩的教學影片及範例，新手建議可以使用anaconda+jupyter notebook環境來實作練習影片內容!:<br />
python基本語法教學:https://morvanzhou.github.io/tutorials/python-basic/basic/ 時間不足僅需看到13.3小節。<br />
python numpy&pandas套件教學:https://morvanzhou.github.io/tutorials/data-manipulation/np-pd/
- 以下將提供四個處理大量數據的作業，都完成後技術就足已應付大部分生物資料的處理(當然還要融會貫通)。
- exercise1:
file link:https://drive.google.com/file/d/1EzioIk9BDTVrimi0Vs6f0K-f8GJXM9E4/view?usp=sharing
執行程式找出包含在chrI 11300~11500區段內的chip-chip ratio</br>
找出包含在chrXI 168000~168600區段內的chip-chip ratio</br>
