# Linux command
## ディレクトリを移動しファイルの中身を確認する
cd .git/ (ディレクトリを.gitへ変更 cd=change directory)  
ls (リスト化)  
cat HEAD (ファイルの中身を確認 con"cat"enate=連結する の意味)  


## git checkoutの意味
HEADポインタの位置を変える  
> git checkout 7c82b7ed (SHA-1ハッシュ値)= 特定のコミットにHEADポインタを持ってくる  

## git checkout "コミットhash ID" --"file名"
指定したコミットIDの、指定したファイルをワークツリとステージングエリア
にコピーできる。  
HEADは移動しない

## detached HEADとは
HEADを移動し前のコミットにHEADをもってくる
git checkout 7c82da (HEADをコミットID＝7c82daのコミットに移動する)  
→HEADがmainブランチの先頭より昔に紐づく　detached HEADの状態  

detached HEAD=　HEADがどのブランチ(の先端)もさしていない状態  
この状態でコミットすると、ブランチ名がないまま伸びてしまう→辿れない。git上で時間で削除される  
これを避けるには、git branch ~~ でブランチポインタを作成する  

## コミットの取り消し方法
コミット履歴　A←B←C  
- 方法１：コミットCを削除: git reset
- 方法２：コミットCを打ち消すコミットを追加する＝実質Bと同じになる git revert  
→方法2 revertが好ましい  
　理由：共同開発相手に影響。削除のコミット履歴を残す


### git resetとは
指定したコミットにHEADを移動する。  
git checkoutとの違い：HEADとともに、ブランチポインタも指定したコミットに移動させる（HEADがブランチを指しているとき  
- 使用例
> git checkout main (目的のブランチに移動し、  
> git log  (ログを見ていくつかのコミットがあることを確認)  
> git reset --hard 5a74ad 
> git log で確認  
   
- オプション
1. git reset "commit hash ID"= ステージングエリアにHEADの内容をコピー
1. git reset --hard  "commit ID" = HEADの内容をワークツリとステージングエリアにコピーする
1. git reset --soft  "commit ID" = ワークツリとステージングエリアはそのまま

### git revertとは
A←B←C←C’　（C’はCを打ち消すコミット  
git revert 5a741d (打ち消したいコミット(のSHA-1ハッシュ値))  
または  
git revert HEAD (HEADが指すコミットを打ち消す)  
→実行　→エディタが開く＝メッセージ入力のため。原則デフォルトでよい。そのままエディタを閉じる  
git diff "古いコミットのID"　"新しいコミットのID"　で打ち消し結果を確認  

## 3-way mergeとは
普通のマージ  
## fast-forward mergeとは
変更を取り込むブランチがさすコミットが、取り込まれるブランチの祖先である場合のみ可能なマージ。コマンドは同じgit merge。  

例：mainブランチはコミットが伸びておらず祖先コミットのまま。取り込まれる側のbug-fixブランチが伸びているとき。＝実質的に分岐していないとき。  
→git mergeを実行すると、HEADポインタとmainブランチポインタが、bug-fixの先頭コミットにうつる＝１本の分岐無しコミット履歴になる  
=mergeと異なり、新たなコミットは作られない。ポインタの移動のみ  

## あえて3-way mergeしたいとき(fast-forwardは行わない)
git merge --no-ff "bug-fix(ブランチ名)"　　（ff=fast-forward  
→コメント記載のためのエディター起動。基本はそのまま。  
→コミットが増える。  

-----

# git 便利機能
## help
- git help :全般的なヘルプ
- git help log :logコマンドに関するヘルプ

## git logオプション
- git log --oneline　詳細を省略し、１行で表示
- git log --graph 分岐やマージがグラフ化
- git log --oneline --graph
- git log --oneline file.txt (file.txtのみのコミットに関して１行表示)
- git log -all (ブランチに関係なくすべてのコミットを表示)

### ブランチを作る位置を指定してからブランチ作成
- git branch bug-fix 9d74e (コミット9d74eの場所にブランチ名bug-fixでブランチ作成)


## コミットの指定方法（世代）
コミットIDを指定せず、世代での指定ができる
- チルダ~ :HEADの何世代前の親化を表す
- キャレット^ :親が複数ある場合(分岐)、何番目の親かを示す。
例：git checkout HEAD^2

## コミットの指定方法２（タグ）
git tag tag-sample (現在のHEADにタグ名tag-sampleというタグを付与)  
git logで確認  
→コミットIDのみならずtag-sampleで指定も可能  

git tag tag-sample 5dd15 (コミット5dd15に対してtag-sampleというタグ名を付与)

### git tag
git tag でタグの一覧

軽量タグ＝名前を付ける
注釈付きタグ＝名前＋コメント

git tag -a (注釈annotateオプション)
git tag -a first-commit -m "最初のコミット" e85w2 (e85w2にfirst-commitの注釈付きタグをつける)

git tag -n (タグの一覧に-nオプション＝注釈　n=数字、メッセージを示す行数。１は省略できる)
### タグの削除
git tag -d first-commit (first-commitタグを削除)
git tag -d first-commit1 first-commit2 first-commit3 (３つのタグを同時に削除)

## バージョン番号とは
変更の段階を表す番号  
３つの数字で表すことが多い　python 3.9.5  
X.Y.Z  
- X=メジャーバージョン。見た目や操作性が変わる大きな変更。下位互換性のない変更などでインクリメント  
- Y＝マイナーバージョン。新機能の追加や既存機能の削除などでインクリメント  
- Z＝パッチバージョン。バグや脆弱性の修正などの軽微な変更でインクリメント  

1.0.0　リリース  
1.0.1　バグ修正  
1.0.2　誤字の修正  
1.1.0　新機能の修正  
2.0.0　UIの刷新と新機能追加  
  
---　　

## stash
変更をコミットする前にcheckoutすることができない。  
しかしcheckoutしたいとき、stashを使う  
git stash
git statusをみると、ワークツリーがクリーンになっている＝作業中のワークツリーが一時的に退避されている。

### git stash list
→stashに入っている内容を見る

git stash pop
→stashを一時退避場所からワークツリーに戻す（ステージングエリアは戻さない）

git stash pop --index
→stashを一時退避場所からワークツリーと、”ステージングエリア”の両方を戻す

git stash clear
→stash内のすべての変更を削除。

## 操作の取り消し
git reflog
→操作の履歴を表示

git reset --hard HEAD@{1}
HEAD@{1}を行った直後の状態に戻すことができる

## 誰が更新したかを捜すコマンド
git blame file.txt
(file.txtの変更履歴を編集者込みで表示)



