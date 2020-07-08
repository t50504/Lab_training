<h2 id='python-p'>Python in data processing</h2><br/>

- python是容易上手的高階程式語言，套件多、應用層面廣。處理資料簡單方便。是一種直譯式語言，在執行時由機器動態逐行直譯成機器看得懂的語言，因此較直覺；比起常見的C/C++等編譯式語言，是透過預先定義資料型別等等，再由編譯器轉為機器看得懂的語言來說，效能會較差，但對於非底層開發者來說，python在應用端的表現已經非常足夠。
- 而在大量數據處理來說，須熟悉基本python語法、numpy套件、pandas套件。就可以應付大部分的工作!下面附上莫煩的教學影片及範例，新手建議可以使用anaconda+jupyter notebook環境來實作練習影片內容!:<br />
[python基本語法教學](https://morvanzhou.github.io/tutorials/python-basic/basic/) 時間不足僅需看到13.3小節。<br />
- chapterA
    - print,operation,variable
    - for
    - if else
    - while
    - function
    - __homework__
      透過函式方法，執行程式可輸入參數是四個學生的分數，依序輸出等第，若大於等於2A且沒有invalid則顯示pass!
    -  100-90 A,89-70 B,69-50 C,其他 invalid 。沒有限制要用幾個函式。
- chapterB
    - global&local variable
    - read&write file (date:7/6)
    - basic data structure -- tuple,list,dictionary
    - continue&break
    - error handle(try,except) 
    - time and memory management (date:7/9)
- [python numpy&pandas套件教學](https://morvanzhou.github.io/tutorials/data-manipulation/np-pd/)
- chapterC:pandas
    - package install and usage
    - read csv & introduce dataframe
    - select column & row
- chapterD:numpy
    - numpy array 

- 以下將提供一些作業，都完成後技術就足已應付大部分生物資料的處理(當然還要融會貫通)。
- [exercise1 filelink](https://drive.google.com/file/d/1EzioIk9BDTVrimi0Vs6f0K-f8GJXM9E4/view?usp=sharing)<br />
__Requirement: Do not use package.__(7/8 hw, to 0. or 1.)
0. 去除前幾行資料及井字號行的資料，只留下chrI 90 91 0.557 ... 以下的資料。
1. 執行程式找出包含在chrI 11300-11500區段內的chip-chip ratio<br />
2. 找出包含在chrXI 168000-168600區段內的chip-chip ratio<br />
3. 將程式包裝成可供使用者輸入chr 跟start pos,end pos,並將搜尋結果印出<br />
- exercise2-iteration practice
1. 讀CSV，欄位篩選、丟棄等等
2. 迴圈運算，題目待設計。
