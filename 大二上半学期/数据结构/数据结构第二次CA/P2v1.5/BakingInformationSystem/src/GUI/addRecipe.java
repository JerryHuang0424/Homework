package GUI;

import BakingInformationSystem.BakedGood;
import BakingInformationSystem.BakingSystem;
import BakingInformationSystem.Ingredient;
import DataStructure.List;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.function.DoublePredicate;

public class addRecipe extends JPanel {
    JPanel addRecipes = new JPanel();

    public static String name;
    List<Ingredient> ingredientList = new List<Ingredient>();
    List<Double> quantityList = new List<Double>();

    public addRecipe() {
        setBounds(0, 50, 700, 400);
        setVisible(true);
        setLayout(null);

        //bake，ingredient和quantity的label
        JLabel nameLabel = new JLabel("name");
        JLabel desLabel = new JLabel("ingredient");
        JLabel quantity = new JLabel("quantities");

        //name，ingredient和quantity的输入
        String bakeName = null;
        System.out.println(BakingSystem.bakedGoodLists.toString());
        JComboBox<String> comboBox = new JComboBox<String>();
        for (int i = 0; i < BakingSystem.bakedGoodLists.size(); i++) {
            bakeName = BakingSystem.bakedGoodLists.getDataByIndex(i).getName();
            comboBox.addItem(bakeName);
        }

        String ingredient=null;
        System.out.println(BakingSystem.ingredientList.toString());
        JComboBox<String> comboBox1 = new JComboBox<String>();
        for (int i = 0; i < BakingSystem.ingredientList.size(); i++) {
            ingredient = BakingSystem.ingredientList.getDataByIndex(i).getName();
            comboBox1.addItem(ingredient);
        }

        JTextField quantityText = new JTextField();

        JTextArea textArea = new JTextArea(5,20);
        textArea.setBounds(150,150,400,150);



        //add按钮
        JButton add = new JButton("add");
        //add.setBounds(320,50,60,25);
        add.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                ingredientList.addFirst(BakingSystem.getIngredientByName((String)comboBox1.getSelectedItem()));
                double d= Double.parseDouble(quantityText.getText()); //将输入的到quantityText中的字符强转为Double
                quantityList.addFirst(d);//将quantity添加到quantityList中
                textArea.append("ingredient :" + comboBox1.getSelectedItem() + "      quantity:" + quantityText.getText()+"\n");//在右边的文本域中显示添加到内容
                quantityText.setText(" ");//将quantityText清空

            }
        });


        JButton complete=new JButton("complete");
        complete.setBounds(350,350,120,25);

        complete.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                BakingSystem.addRecipe(BakingSystem.getBakedGoodByName((String)comboBox.getSelectedItem()),ingredientList,quantityList);
                textArea.setText(" ");
            }
        });

        JPanel addPanel = new JPanel();
        addPanel.setBounds(100,0,200,100);

        addPanel.setLayout(new GridLayout(3, 2));
        addPanel.add(nameLabel);
        addPanel.add(comboBox);
        addPanel.add(desLabel);
        addPanel.add(comboBox1);
        addPanel.add(quantity);
        addPanel.add(quantityText);
        JPanel a=new JPanel();
        a.setBounds(0,0,700,150);
        a.setLayout(new FlowLayout(FlowLayout.CENTER));
        a.add(addPanel);
        a.add(add);


        add(a);
        add(textArea);
        add(complete);
    }
}
