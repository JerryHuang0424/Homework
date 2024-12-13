#include <iostream>
#include <iomanip>
#include <vector>
#include <string>

using namespace std;

// Eratosthenes's Sieve to find all the primes
template<typename NumberLike, typename = enable_if_t<is_integral_v<NumberLike>, NumberLike>>
vector<NumberLike> Eratosthenes(int n) {
    vector<bool> is_prime(n+1, true);
    vector<NumberLike> result;
    for (NumberLike i = 2; i <= n; ++i) {
        if (is_prime[i]) {
            result.push_back(i);
            for (NumberLike j = i * i; j <= n; j += i)
                is_prime[j] = false;
        }
    }
    return result;
}

int main() {
    ios::sync_with_stdio(false);
    auto primes = Eratosthenes<unsigned long>(100);
    int count = 0;
    for(auto prime : primes) {
        cout << prime;
        ++count;
        count % 5 ? cout << setw(3) : cout << endl;
    }
}