package GUI;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URL;

public class BakedDialog extends JDialog {
    JDialog bakedPanel=new JDialog();
    String name;
    String description;
    String origin;
    String url;

    public BakedDialog(String name,String origin,String description,String url){
        //设置dialog的基本属性
        bakedPanel.setBounds(200,200,400,600);


        //存放图片
//        JLabel pictureLabel=new JLabel();
//        pictureLabel.setBounds(50,0,200,200);
//        pictureLabel.setBackground(Color.cyan);
//        URL url1=BakedDialog.class.getResource("QQ图片20231121105801.png");
//        ImageIcon imageIcon=new ImageIcon(url1);
//        pictureLabel.setIcon(imageIcon);

        //新建一个JPanel来存放物品的属性
        JPanel jPanel=new JPanel();
        jPanel.setLayout(new GridLayout(3,2));
        jPanel.setBounds(50,200,170,150);

        JLabel label=new JLabel("name:");
        JLabel label1=new JLabel("origin:");
        JLabel label2=new JLabel("description:");
        JLabel label3=new JLabel(name);
        JLabel label4=new JLabel(origin);
        JLabel label5=new JLabel(description);

        jPanel.add(label);
        jPanel.add(label3);
        jPanel.add(label1);
        jPanel.add(label4);
        jPanel.add(label2);
        jPanel.add(label5);

        //用来存放button的JPanel
        JPanel panelButton=new JPanel();
        panelButton.setLayout(new FlowLayout(FlowLayout.CENTER));
        panelButton.setBounds(0,500,400,100);

        JButton ok=new JButton("ok");
        ok.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

            }
        });
        JButton revise=new JButton("revise");
        panelButton.add(ok);
        panelButton.add(revise);



        bakedPanel.add(jPanel);
        bakedPanel.add(panelButton);


        bakedPanel.setLayout(null);
        bakedPanel.setVisible(true);
        bakedPanel.setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);


    }
}
