#include <iostream>

using namespace std;

template<typename ArrayLike, typename = enable_if_t<is_pointer_v<ArrayLike>, ArrayLike>,
         typename NumberLike, typename = enable_if_t<is_integral_v<NumberLike>, NumberLike>>
void bubbleSort(ArrayLike array, NumberLike arraySize) {
    for(NumberLike i = 0; i < arraySize; ++i) {
        for(NumberLike j = 0; j < arraySize - i; ++j) {
            if(array[j] > array[j + 1])
                swap(array[j], array[j + 1]);
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cout << "How many numbers do you want to sort? ";
    int n;
    cin >> n;
    int* array = new int[n];
    for(int i = 0; i < n; ++i) {
        cin >> array[i];
    }
    bubbleSort(array, n);
    for(int i = 0; i < n; ++i) {
        cout << array[i] << " ";
    }
    cout << endl;
    delete[] array;
}