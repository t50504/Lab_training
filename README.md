# Welcome Cosbi lab !

## Skill you should have:
- Linux system operation.
- python in data processing.
- Web front end language (html,css,javascripts).
- Web framework(Django or ASP).
- Mysql application.
## Extra ( to be a good ITer)
- Learn to note on HackMD.
- Learn to use git or github.[推薦教學網誌](http://blog.gogojimmy.net/2012/01/17/how-to-use-git-1-git-basic/)
- Can practice program skill on leetcode.
### Linux system operation
#### Introduction
- 實驗室伺服器及外面公司伺服器大多都是linux系統，比起windows有以下好處:
開源、多用戶多任務、穩定及高效、安全。
___As a programmer,you should learn work on linux!___
- 伺服器中分為管理者與使用者，管理者就是天神，可以對伺服器做任何事。使用者則權限有限，僅對自己帳號下的資料夾有百分百權限。
- 在管理者創建帳號給使用者後，就可以透過pietty(putty)等ssh連線工具及filezila檔案傳輸工具，遠端連到伺服器並在linux系統下工作及檔案傳輸。
- Recommended doc:[鳥哥的linux私房菜](http://linux.vbird.org/)
#### basic operation
- mkdir/rm -r:創建/刪除 資料夾。
- cd、cd..:進入退出資料夾。
- vi:文件編輯器，後+filename則可以直接創建並編寫。
(i進入編輯模式，esc離開編輯模式、:wq存檔並退出、其他請自行琢磨)
- cp a b: 複製檔案a為檔案b。
- mv a b: 移動檔案a到位置b。
- 其他請自行多研究，還有很多實用語法。
- <font color='#0000dd'>exercise1</font>:
請創建test1、test2 folder，並進入test1創建practice.txt內容隨意。複製此檔案命名為practice2.txt，並將practice2 move到test2 folder。
- <font color='#0000dd'>exercise2</font>:
將連結中[]的.py檔載下來，並透過filezila傳到你的linux資料夾。執行此python檔案。

### Python in data processing
- python是容易上手的高階程式語言，套件多、應用層面廣。處理資料簡單方便。是一種直譯式語言，在執行時由機器動態逐行直譯成機器看得懂的語言，因此較直覺；比起常見的C/C++等編譯式語言，是透過預先定義資料型別等等，再由編譯器轉為機器看得懂的語言來說，效能會較差，但對於非底層開發者來說，python在應用端的表現已經非常足夠。
- 而在大量數據處理來說，須熟悉基本python語法、numpy套件、pandas套件。就可以應付大部分的工作!下面附上莫煩的教學影片及範例，新手建議可以使用anaconda+jupyter notebook環境來實作練習影片內容!:<br />
[python基本語法教學](https://morvanzhou.github.io/tutorials/python-basic/basic/) 時間不足僅需看到13.3小節。<br />
[python numpy&pandas套件教學](https://morvanzhou.github.io/tutorials/data-manipulation/np-pd/)
- 以下將提供四個處理大量數據的作業，都完成後技術就足已應付大部分生物資料的處理(當然還要融會貫通)。
- [exercise1 filelink](https://drive.google.com/file/d/1EzioIk9BDTVrimi0Vs6f0K-f8GJXM9E4/view?usp=sharing)<br />
1. 執行程式找出包含在chrI 11300-11500區段內的chip-chip ratio<br />
2. 找出包含在chrXI 168000-168600區段內的chip-chip ratio<br />
3. 將程式包裝成可供使用者輸入chr 跟start pos,end pos,並將搜尋結果印出<br />
- [exercise2 filelink](https://drive.google.com/file/d/1HOhuA-f3UB8wYcFdcfp5Pnb9hIeSkLDc/view?usp=sharing)<br />
1. 給予[輸入檔](https://drive.google.com/file/d/1PQw64uJRBR_DhHXFeP-FviEP1YoWDp7b/view?usp=sharing)，裡面包含一群輸入基因(feature name)，使用者輸入檔名後，請將不在檔案7185中的基因顯示出來。
2. 將Feature name欄位與standard gene name 做出name-id對照表，可供使用者輸入name或id，輸出對應的id及name。以及其MW欄位值還有te欄位值<br />

- [exercise3 filelink1](https://drive.google.com/file/d/1rG6Zxgwa19EzkKdNHDGvZk9HkFYbAJAW/view?usp=sharing)<br />
[exercise3 filelink2](https://drive.google.com/file/d/1YT7ONUzKMRNBBys-RSHbqkJYCP6fKQ7A/view?usp=sharing)<br />
Notice. 這題不容易，請保重
1. 請將檔案一的piRNA seq進行反轉並補序(ATCG->TAGC)，輸出一個新欄位。
2. 檔案一包含piRNA與mRNA配對資訊,remain seq欄位是很長的mRNA中的一段片段，RNA_pos欄位就是此片段在mRNA中的位置。請將欄位RNA id與檔案二的mRNA sequence原檔案對照，就能知道完整mRNA序列。現在要實現一個算分公式，是將配對到的mRNA片段前後延伸20個位置，並將反轉補序過的piRNA進去掃，每次移動一個位置，並找出最高分的發生在mRNA中的哪段位置。
3. 算分公式:10 - 7*(# of non-GU mismatch in seed) - 1.5*(# of GU
mismatch in seed) - 2*(# of non-GU mismatch in non-seed) - 1.5*(# of
GU mismatch in non-seed) 。
where seed region is position 2-7,non-seed region is position 8-21,position 1 not in consider.
4. 輸出答案須包含最高分數、發生位置、total-mismatch-number、GU_mismatch-position、xGU_mismatch-position。

### Web frontend language
- Nice tutorial: w3school
#### HTML
- 網頁的骨幹，所有的網頁元素都是由基本的html元素構成，是一種語法可供瀏覽器解析，詳細教學請啃
[HTML Tutorial](https://www.w3schools.com/html/default.asp)，'至少'看到HTML Forms的部分。
#### CSS
- 網頁的外貌，用來排版、裝飾HTML元素，詳細教學請啃
[CSS Tutorial](https://www.w3schools.com/css/default.asp)，'至少'看到CSS Navigation Bar的部分。
並請額外看Flexbox部分，是比較新的網頁CSS排版技術。
- <font color='#0000dd'>exercise1</font>
刻出自我介紹的靜態網頁，須包含三張照片並排、照片的背景區要淺灰色(隨意，不用自己的照片)，並且內容條列式、加註重點，並且附上自己臉書的連結。所有內容須置中。
#### Javascript
- 網頁的靈魂，使網頁具有互動性，並操作html dom元件，前端網頁的好壞，很大部分取決於js寫的好不好，跟java沒有關係!!，詳細教學請啃[JavaScript Tutorial](https://www.w3schools.com/js/default.asp)，這是一套完整的程式語言，隨著網路發達、網頁發展非常需要會寫js的人才，能全部看完最好。
- 額外補充1:AJAX技術，這是碩論網站必須用到的技巧，也是現在各大網頁都有用的技巧，上手需一段時間，有額外時間可以多練習。AJAX就是網頁非同步技術，在使用者操作時，不會一直重新更新整個網頁，而是僅改變使用者操作的部分，可以聯想GMAIL,在點信件時，並不會整個頁面刷新，而是只有內容區域更動。<br />
技術原理是利用JS語言，寫一隻程式在伺服器接收請求之前先獲取請求，並由這支程式將預先向伺服器請求的資訊回應給使用者的瀏覽器，如此達到不用頻繁向伺服器請求及響應的目的，增快網頁效能。
- 額外補充2:JQuery是基於JS所開發出來的套件，使用方便有效率、但有辦不到的功能還是要靠js刻出來，所以可斟酌使用但不必過度依賴。
- 額外補充3:現在因應快速開發網頁需求，有許多JS框架誕生，讓開發者只要會使用框架就能讓網頁具備強大功能，如React.js、vue.js、angular.js，有興趣可以自學，輕量級且上手較快、較年輕的框架是中國人開發的vue.js，可以先從此上手。
#### Conclusion
