M = 9;
N = 5;

// seq: 카드 배열 상태
// used: 사용한 카드(비트열)
// n: 이동 횟수
function search(seq, used, n) {
  if (n == 0) {
    // 탐색이 완료되었다면 남은 개수의 계승을 반환
    let result = 1;
    let cnt = seq.filter(function(e) {return e == 0;}).length;
    for (let i = 1; i <= cnt; i++) {
      result *= i;
    }
    return result;
  }
  let cnt = 0;
  for (let i = 1; i < M; i++) {
    new_seq = seq.slice(0, i + 1).reverse();
    new_seq = new_seq.concat(seq.slice(i + 1));
    if ((seq[i] == 0) && ((used & (1 << i)) == 0)) {
      new_seq[0] = i + 1;
      cnt += search(new_seq, used | (1 << i), n - 1);
    } else if (seq[i] == i + 1) {
      cnt += search(new_seq, used, n - 1);
    }
  }
  return cnt;
}

seq = (new Array(M)).fill(0);
seq[0] = 1;
console.log(search(seq, 1, N));