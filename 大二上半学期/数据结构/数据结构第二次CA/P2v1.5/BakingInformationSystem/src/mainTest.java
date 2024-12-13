import BakingInformationSystem.*;
import BakingInformationSystem.Ingredient;
import DataStructure.List;
import saveAndLoad.save;

import java.util.Random;

public class mainTest {
    public static void main(String[] args) {
        BakingSystem.addBakedGood("蒙德烤鱼", "蒙德", "op差不多得了", "www.genshin.com");
        System.out.println(BakingSystem.getBakedGoodByName("蒙德烤鱼").getDescription());

        BakingSystem.addBakedGood("d", "蒙德", "op差不多得了", "www.genshin.com");
        BakingSystem.addBakedGood("c", "蒙德", "op差不多得了", "www.genshin.com");
        BakingSystem.addBakedGood("b", "蒙德", "op差不多得了", "www.genshin.com");
        BakingSystem.addBakedGood("a", "蒙德", "op差不多得了", "www.genshin.com");

        System.out.println(BakingSystem.listAllBakedGoodsByName());
        BakingSystem.addIngredient("面粉", "粉状", 10);
        BakingSystem.addIngredient("原石", "答辩", 250);
        BakingSystem.addIngredient("米哈游", "依托是", 114514);

        List<Ingredient> ingredientList = new List<>();
        ingredientList.addLast(BakingSystem.getIngredientByName("面粉"));
        ingredientList.addLast(BakingSystem.getIngredientByName("原石"));
        ingredientList.addLast(BakingSystem.getIngredientByName("米哈游"));
        List<Double> doubleList1 = new List<>();
        doubleList1.addLast(new Random().nextDouble());
        doubleList1.addLast(new Random().nextDouble());
        doubleList1.addLast(new Random().nextDouble());
        List<Double> doubleList2 = new List<>();
        doubleList2.addLast(new Random().nextDouble());
        doubleList2.addLast(new Random().nextDouble());
        doubleList2.addLast(new Random().nextDouble());
        List<Double> doubleList3 = new List<>();
        doubleList3.addLast(new Random().nextDouble());
        doubleList3.addLast(new Random().nextDouble());
        doubleList3.addLast(new Random().nextDouble());
        List<Double> doubleList4 = new List<>();
        doubleList4.addLast(new Random().nextDouble());
        doubleList4.addLast(new Random().nextDouble());
        doubleList4.addLast(new Random().nextDouble());

        BakingSystem.addRecipe(BakingSystem.bakedGoodsTable.get("d"), ingredientList, doubleList1);
        BakingSystem.addRecipe(BakingSystem.bakedGoodsTable.get("c"), ingredientList, doubleList2);
        BakingSystem.addRecipe(BakingSystem.bakedGoodsTable.get("b"), ingredientList, doubleList3);
        BakingSystem.addRecipe(BakingSystem.bakedGoodsTable.get("a"), ingredientList, doubleList4);

        System.out.println(BakingSystem.listAllRecipesByName());
        System.out.println(BakingSystem.listAllRecipesByCalories());
        System.out.println(BakingSystem.listAllRIngredientByName());
        System.out.println(BakingSystem.listBakedGoodsContainThisIngredient(BakingSystem.getIngredientByName("面粉")));

        System.out.println(BakingSystem.searchBakedGood("a", "name"));
        save.saveSystemData();
    }
}