#include <iostream>
#include <set>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cout << "------------------------------------------\n"
            "Enter ten numbers: ";
    // This work can be also done by implementing set with the help of
    // red-black tree, but it does work~
    set<int> distinct;
    for(int i = 0; i < 10; ++i) {
        int num;
        cin >> num;
        distinct.insert(num);
    }
    cout << "The distinct numbers are: ";
    for(int n : distinct) cout << n << " ";
    cout << "\n------------------------------------------" << endl;
}