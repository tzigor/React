export function wordCount(str) {
    const m = str.match(/[^\s]+/g)
    return m ? m.length : 0;
}

export function plural(n) {
    if (n === 0) return 'no words'
    else if (n === 1) return '1 word'
    else return n + ' words'
}