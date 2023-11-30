# Prismic CMS Portfolio Template
This is a simple portfolio site using the headless CMS service Prismic

##About this project
Tech:
- Next.js
- Tailwind
- Prismic

**Demo Site:**
https://public-prismic-cms-portfolio-template.vercel.app/

**Notes**
- This is set up as a multi-language site but is coded for English (default) and Japanese.  If you want to change to different languages you will need to change values within the code.



## How to install

### Clone and set up Prismic repository
Run the below in your terminal to clone this project and start to set up your Prismic repository. 

```
npx degit jamie-kostaschuk/Public-Prismic-CMS-Portfolio-Template
npx @slicemachine/init@latest
```

During this stage, you will be prompted to login to Prismic and choose a repository. 
If this is your first time, choose "CREATE NEW", and enter in your preferred name. 
Slices will then be synced with that Prismic repository. 


### Create base contents
Go to your [Prismic Dashboard](https://prismic.io/dashboard), and open your new repository. 
You will be prompted to define the default language. Select English. 

Your dashboard will be empty to start with.
![Image of empty repository dashboard](/assets/images/dashboard1.png)


  

 
There are 2 documents you need to set for each language. 
- Navigation
- Home ("casestudies")

These are addable via the create button. 

![Image of page types](/assets/images/page-addition-menu.png)

Since you default langauge is English, create these files. 
to add Japanese (or a different second language), forst go to the settings and add as a locale. 
Afterwards you will be able to make files for thr Japanese locale too. 
 
 
#### Navigation
In the Navigation file, you define what will be in your header navigation and the top page link.
For each link you want in the header, add a link in the repeatable zone. 

To create this file, create a page with the "navigation" type in the top section for your repository. 

![Image of navigation setting page](/assets/images/navigation-settings.png)




### Home
To set up the home page, create a "page" type in the repository top, and set it's uid "casestudies". 
"uid" is a unique identifier to set a different page as home you will need to change values in the code. 


![Image of uid setting](/assets/images/uid-setting.png)

 
 
 
In this "casestudies" you can add different sections. There is a CaseStudyCards slice that can be added to create a simple case study list section. 

![Image of slice selection](/assets/images/casestudy-slice.png)



