<h2 id='python-p'>Python in data processing</h2><br/>

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