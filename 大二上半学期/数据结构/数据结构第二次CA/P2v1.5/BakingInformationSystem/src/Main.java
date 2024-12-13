import DataStructure.*;
import BakingInformationSystem.*;
import GUI.MainWindow;
import saveAndLoad.*;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
       load.loadSystemData();
       //BakingSystem.addBakedGood("dfgasdfggfsdf gfdfhj nhbvderfv cfrdcdert tawesrhdtj fhsn6545621","haoye","opsl","www.nuist.com");
//       BakingSystem.editBakedGood("a","1","haoye","opsl","www.nuist.com");
//       BakingSystem.editBakedGood("b","2","haoye","opsl","www.nuist.com");
        BakingSystem.addBakedGood("黄家睿","日本","大大滴好的大佐","www");
        System.out.println( BakingSystem.listAllBakedGoodsByName());
        System.out.println( BakingSystem.listAllRIngredientByName());
        BakingSystem.deleteBakedGood("2");
        System.out.println( BakingSystem.listAllBakedGoodsByName());
        System.out.println(BakingSystem.searchRecipe("20000","calories"));
        System.out.println(BakingSystem.searchBakedGood("1","name"));
        System.out.println(BakingSystem.searchBakedGood("op差不多得了","description"));
        System.out.println(BakingSystem.searchBakedGood("蒙德烤鱼","name"));
        new MainWindow();
    }
}