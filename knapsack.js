function knapsack01(items, budget) {
    const n = items.length;
    const W = budget;

    const dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        const item = items[i - 1];
        for (let w = 0; w <= W; w++) {
            dp[i][w] = dp[i - 1][w];

            if (item.price <= w) {
                const valueIfIncluded = dp[i - 1][w - item.price] + item.priority;
                if (valueIfIncluded > dp[i][w]) {
                    dp[i][w] = valueIfIncluded;
                }
            }
        }
    }

    const selected = [];
    let w = W;
    for (let i = n; i >= 1; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
            selected.push(items[i - 1]);
            w -= items[i - 1].price;
        }
    }

    return selected;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { knapsack01 };
}
