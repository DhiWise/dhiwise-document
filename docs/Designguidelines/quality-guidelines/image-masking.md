---
sidebar_position: 5
---

# Image Masking

When an Image is masked with a layer, a mask object is created in the design hierarchy, which includes the mask and related layers for masking.
:::caution
Icons should be designed using vector, and not with a PNG type.
:::

All inner layers which are used to mask are under the **mask object**. These inner layers should be grouped properly and only wanted images should come inside them. 

:::tip
Masking should be done using a single group with its masked object.
:::

In the below example, the background image is masked with multiple groups which creates a design issue, 


![Example banner](./image/Image-masking.png)

While in the below design the masking is done with a single group and all the included layers are kept inside it.



<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).