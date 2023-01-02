function a(n) {
  for (let i = 1; i <= n; i++) {
    console.log('i :' + i);
    for (let j = 1; j <= n; j++) {
      console.log('j:' + j);
    }
  }
}

console.log(a(5));
