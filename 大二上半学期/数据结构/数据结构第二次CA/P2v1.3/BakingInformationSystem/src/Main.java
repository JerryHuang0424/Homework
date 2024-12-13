import DataStructure.*;
import BakingInformationSystem.*;
import GUI.MainWindow;
import saveAndLoad.*;
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        load.loadSystemData();
        System.out.println(BakingSystem.listBakedGoodsContainThisIngredient(BakingSystem.getIngredientByName("面粉")));
        save.saveSystemData();
        new MainWindow();

    }

}