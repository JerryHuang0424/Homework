#include <iostream>
#include <vector>

using namespace std;
// Eratosthenes's Sieve to find all the primes
vector<int> Eratosthenes(int n) {
    bool* is_prime = new bool[n + 1];
    for (int i = 0; i <= n; ++i) is_prime[i] = true;
    vector<int> result;
    for (int i = 2; i <= n; ++i) {
        if (is_prime[i]) {
            result.push_back(i);
            for (int j = i * i; j <= n; j += i)
                is_prime[j] = false;
        }
    }
    delete[] is_prime; // Release the memory allocated to avoid memory leak
    return result;
}

int main() {
    ios::sync_with_stdio(false);
    auto primes = Eratosthenes(1000); // All primes in the range of [2, 1000]
    for(int i = 0; i < primes.size(); ++i) {
        if(primes[i] + 2 == primes[i + 1])
            cout << "(" << primes[i] << "," << primes[i + 1] << ")" << endl;
    }
}