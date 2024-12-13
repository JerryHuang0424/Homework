package GUI;

import BakingInformationSystem.BakedGood;
import BakingInformationSystem.BakingSystem;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URL;

public class DialogBaking extends JDialog {
    JDialog bakedDialog=new JDialog();
    String name;
    String description;
    String origin;
    String url;

    public DialogBaking(BakedGood bakedGood){
if (bakedGood==null) {
return;
};

        name=bakedGood.getName();
        description=bakedGood.getDescription();
        origin=bakedGood.getOrigin();
        url=bakedGood.getImageUrl();
        System.out.println(name+description+origin+url);
        //设置dialog的基本属性
        bakedDialog.setBounds(200,200,300,400);


        //存放图片
        JPanel picturePanel=new JPanel();
        picturePanel.setBounds(0,0,400,5000);
        URL url1=DialogIngredient.class.getResource("微信图片_20230821215943.jpg");
        ImageIcon imageIcon=new ImageIcon(url1);
        JLabel jLabel=new JLabel();
        jLabel.setIcon(imageIcon);
        picturePanel.add(jLabel);




        //新建一个JPanel来存放物品的属性
        JPanel jPanel=new JPanel();
        jPanel.setLayout(new GridLayout(3,2));
        jPanel.setBounds(0,100,200,200);

        JLabel label=new JLabel("                   name:");
        JLabel label1=new JLabel("                  origin:");
        JLabel label2=new JLabel("          description:");
        JLabel label3=new JLabel("                    "+name);
        JLabel label4=new JLabel("                    "+origin);
        JLabel label5=new JLabel("                    "+description);

        jPanel.add(label);
        jPanel.add(label3);
        jPanel.add(label1);
        jPanel.add(label4);
        jPanel.add(label2);
        jPanel.add(label5);

        //用来存放button的JPanel
        JPanel panelButton=new JPanel();
        panelButton.setLayout(new FlowLayout(FlowLayout.CENTER));
        panelButton.setBounds(0,300,300,50);

        JButton ok=new JButton("ok");
        ok.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                bakedDialog.dispose();
            }
        });
        JButton amend=new JButton("amend");
        amend.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                bakedDialog.dispose();
                JDialog jDialog=new JDialog();
                jDialog.setLayout(new FlowLayout(FlowLayout.LEADING));


                JLabel nameLabel=new JLabel("name");
                JLabel originLabel=new JLabel("place/country of origin");
                JLabel descriptionLabel=new JLabel("description");
                JLabel pictureLabel=new JLabel("URL address");

                JTextField nameText=new JTextField();
                nameText.setText(name);
                JTextField originText=new JTextField();
                originText.setText(origin);
                JTextField desText=new JTextField();
                desText.setText(description);
                JTextField URLText=new JTextField();
                URLText.setText(url);



                JPanel addPanel=new JPanel();
                addPanel.setLayout(new GridLayout(4,2));
                addPanel.add(nameLabel);
                addPanel.add(nameText);
                addPanel.add(originLabel);
                addPanel.add(originText);
                addPanel.add(descriptionLabel);
                addPanel.add(desText);
                addPanel.add(pictureLabel);
                addPanel.add(URLText);

                JButton ok=new JButton("ok");




                jDialog.add(addPanel);
                jDialog.add(ok);
                ok.addActionListener(new ActionListener() {
                    @Override
                    public void actionPerformed(ActionEvent e) {
                       BakingSystem.editBakedGood(name,nameText.getText(),originText.getText(),desText.getText(),URLText.getText());
                       jDialog.dispose();
                    }
                });

                jDialog.setBounds(200,200,300,200);
                jDialog.setVisible(true);

            }
        });
        JButton remove=new JButton("remove");
        remove.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                BakingSystem.deleteBakedGood(bakedGood.getName());
                bakedDialog.dispose();

            }
        });
        panelButton.add(ok);
        panelButton.add(amend);
        panelButton.add(remove);


        bakedDialog.add(picturePanel);
        bakedDialog.add(jPanel);
        bakedDialog.add(panelButton);


        bakedDialog.setLayout(null);
        bakedDialog.setVisible(true);
        bakedDialog.setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);


    }
}
