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

template<typename NumberLike, typename = enable_if_t<is_integral_v<NumberLike>, NumberLike>>
bool isPalindromic(NumberLike integer) {
    if(integer < 10) return true;
    string original = to_string(integer), reversed = original;
    reverse(reversed.begin(), reversed.end());
    for(NumberLike i = 0; i < original.size() >> 1; ++i) {
        if(original[i] != reversed[i]) return false;
    }
    return true;
}

int main() {
    ios::sync_with_stdio(false);
    auto primes = Eratosthenes<unsigned long>(99999);
    int count = 0;
    for(auto prime : primes) {
        if(isPalindromic(prime)) {
            cout << prime;
            ++count;
            count % 10 ? cout << setw(6) : cout << endl;
        }
        if(count == 100) return 0;
    }
}