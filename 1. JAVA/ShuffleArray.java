// A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

public class ShuffleArray {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        shuffleArray(arr);
        System.out.print("Shuffled array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    public static void shuffleArray(int[] arr) {
        int n = arr.length;

        for (int i = n - 1; i > 0; i--) {

            int pseudoRandomIndex = (int) (Math.random() * (i + 1));

            // Swap elements at positions i and the pseudo-random index
            int temp = arr[i];
            arr[i] = arr[pseudoRandomIndex];
            arr[pseudoRandomIndex] = temp;
        }
    }
}