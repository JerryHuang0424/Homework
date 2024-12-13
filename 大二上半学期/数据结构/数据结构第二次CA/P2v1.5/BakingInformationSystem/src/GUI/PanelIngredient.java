package GUI;

import BakingInformationSystem.BakingSystem;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Scanner;

public class PanelIngredient extends JPanel {
    JPanel panelIngredient=new JPanel();
    public PanelIngredient(){
        panelIngredient.setBounds(0,50,700,400);
        panelIngredient.setVisible(true);


        //设置IngredientShow的panel
        int size;
        JPanel ingredientShow=new JPanel();
        Scanner sc=new Scanner(System.in);

        size= BakingSystem.ingredientList.size();

        if(size==0){
            JDialog dialog=new JDialog();
            dialog.setLayout(new FlowLayout(FlowLayout.LEADING));
            dialog.add(new JLabel("please add an ingredient"));
            dialog.setVisible(true);
            JButton ok=new JButton("ok");
            ok.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    dialog.dispose();
                }
            });

        }
        int rows;
        if(size/4==0){
            rows=size/4;
        }else{
            rows=size/4+1;
        }
        ingredientShow.setLayout(new GridLayout(rows,4,5,5));
        for(int i=0;i<size;i++){
            String name=BakingSystem.ingredientList.getDataByIndex(i).getName();
            JButton jButton=new JButton(name);
            int finalI = i;
            int finalI1 = i;
            int finalI2 = i;
            jButton.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    DialogIngredient ingredientDialog=new DialogIngredient(BakingSystem.ingredientList.getDataByIndex(finalI2));
                }
            });
            ingredientShow.add(jButton);

        }

        //新设置一个JScrollPane，将bakingShow添加到里面
        JScrollPane scrollPane = new JScrollPane(ingredientShow);
        scrollPane.setPreferredSize(new Dimension(700,350));

        //将JScrollPane添加到bakingPanel
        add(scrollPane,BorderLayout.CENTER);
    }
}
