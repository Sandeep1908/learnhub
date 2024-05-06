const express = require('express')
const router = express.Router()
const {join} =require('path')

router.get('/', function (_req, res) {
    // console.log(join(__dirname,"/authentication/index.html"))
//    res.sendFile('C:\Users\\ASUS\\Downloads\\velozity new\\eka\\LearnHub\\LearnHub\\authentication\\index.html')
   res.sendFile(join(__dirname,"../index.html"))
    
})

router.get('/signin',(req,res)=>{
    res.sendFile(join(__dirname,'../sign-in/index.html'))
})
router.get('/signup',(req,res)=>{
    res.sendFile(join(__dirname,'../sign-up/index.html'))
})
router.get('/forgetPassword',(req,res)=>{
    res.sendFile(join(__dirname,'../sign-in/forgetP.html'))
})
router.get('/newpassword',(req,res)=>{
    res.sendFile(join(__dirname,'../sign-in/setpass.html'))
})

router.get('/allprogram',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/index.html'))
})
router.get('/data',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/data/index.html'))
})
router.get('/data',(req,res)=>{
    res.sendFile(join(__dirname,'./courses/data/index.html'))
})


router.get('/dal2',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/dal2/index.html'))
})


router.get('/dal3',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/dal3/index.html'))
})


router.get('/gdml1',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/gdml1/index.html'))
})


router.get('/gdml2',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/gdml2/index.html'))
})


router.get('/gdml3',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/gdml3/index.html'))
})


router.get('/uiuxl1',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/uiuxl1/index.html'))
})
router.get('/uiuxl2',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/uiuxl2/index.html'))
})
router.get('/uiuxl3',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/uiuxl3/index.html'))
})

router.get('/vc',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/vc/index.html'))
})

router.get('/product',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/product/index.html'))
})

router.get('/pml2',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/pml2/index.html'))
})


router.get('/pml3',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/pml3/index.html'))
})


router.get('/fal1',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/fal1/index.html'))
})

router.get('/fal2',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/fal2/index.html'))
})


router.get('/fal3',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/fal3/index.html'))
})


//home

router.get('/pyBToA',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/pyBToA/index.html'))
})


router.get('/crypto',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/crypto/index.html'))
})




router.get('/ccdB',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/ccdB/index.html'))
})
















router.get('/about-us',(req,res)=>{
    res.sendFile(join(__dirname,'../about-us/index.html'))
})

router.get('/contact-us',(req,res)=>{
    res.sendFile(join(__dirname,'../contact-us/index.html'))
})


router.get('/mentors',(req,res)=>{
    res.sendFile(join(__dirname,'../mentors/index.html'))
})


router.get('/tos',(req,res)=>{
    res.sendFile(join(__dirname,'../tos/index.html'))
})


router.get('/privacy-policy',(req,res)=>{
    res.sendFile(join(__dirname,'../privacy-policy/index.html'))
})


router.get('/refund-policy',(req,res)=>{
    res.sendFile(join(__dirname,'../refund-policy/index.html'))
})




















router.get('/adbobeAcrobat',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/AdobeAcrobatX/index.html'))
})

router.get('/adbobepp',(req,res)=>{
    res.sendFile(join(__dirname,'../adobePP/index.html'))
})
router.get('/communicationAcquireEffective',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/communicationAcquireEffective//index.html'))
})

router.get('/SoftSkillforPersonal',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/SoftSkillforPersonal/index.html'))
})

router.get('/ExcellenceInInterpersonal',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/ExcellenceInInterpersonal/index.html'))
})
router.get('/EffectiveInterpersonalSkills',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/EffectiveInterpersonalSkills/index.html'))
})

router.get('/betterEmailsCommunication',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/betterEmailsCommunication/index.html'))
})

router.get('/becomeYourBestSelf',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/becomeYourBestSelf/index.html'))
})

router.get('/becomeYourBestSelf',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/becomeYourBestSelf/index.html'))
})




router.get('/leaderShipMasterClass',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/leaderShipMasterClass/index.html'))
})



router.get('/completePersonalDevelopment',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/completePersonalDevelopment/index.html'))
})


router.get('/selfConfidence',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/selfConfidence/index.html'))
})



router.get('/workplaceCommunication',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/workplaceCommunication/index.html'))
})



router.get('/EffectiveEmailCommunicatoin',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/EffectiveEmailCommunicatoin/index.html'))
})



router.get('/psycologyOfDiversity',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/psycologyOfDiversity/index.html'))
})



router.get('/CriticalThinkingStrategies',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/CriticalThinkingStrategies/index.html'))
})




router.get('/StoryTellingToInfluence',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/StoryTellingToInfluence/index.html'))
})


router.get('/ProductivityAndTimeManagement',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/ProductivityAndTimeManagement/index.html'))
})




router.get('/IntroCloudComputing',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/IntroCloudComputing/index.html'))
})




router.get('/MicrosoftAzureZeroToHera',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/MicrosoftAzureZeroToHera/index.html'))
})




router.get('/AdroidMachineLearnign',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/AdroidMachineLearnign/index.html'))
})




router.get('/TensorflowDeveloperZeroToMastery',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/TensorflowDeveloperZeroToMastery/index.html'))
})




router.get('/NLPandTransformer',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/NLPandTransformer/index.html'))
})




router.get('/adbobeAcrobat',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/adbobeAcrobat/index.html'))
})




router.get('/TheDataScienceCourse',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/TheDataScienceCourse/index.html'))
})




router.get('/LangChainPython-copy',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/LangChainPython-copy/index.html'))
})




router.get('/GraphicDesignMaster',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/GraphicDesignMaster/index.html'))
})




router.get('/CSSGuide',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/CSSGuide/index.html'))
})




router.get('/WordpressSocial',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/WordpressSocial/index.html'))
})




router.get('/ResponsiveWebD',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/ResponsiveWebD/index.html'))
})




router.get('/awsCertified',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/awsCertified/index.html'))
})




router.get('/Web-Development-Bootcamp',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/Web-Development-Bootcamp/index.html'))
})




router.get('/completeGPT',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/completeGPT/index.html'))
})




router.get('/openCV',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/openCV/index.html'))
})




router.get('/sqlBeg',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/sqlBeg/index.html'))
})



router.get('/PythonML',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/PythonML/index.html'))
})



router.get('/chatGpt',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/chatGpt/index.html'))
})



router.get('/Devops',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/Devops/index.html'))
})



router.get('/powerBI',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/powerBI/index.html'))
})



router.get('/dbDesign',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/dbDesign/index.html'))
})



router.get('/XAI-Python',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/XAI-Python/index.html'))
})



router.get('/chatGptBonus',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/chatGptBonus/index.html'))
})



router.get('/microsoft',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/microsoft/index.html'))
})



router.get('/jsBoot',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/jsBoot/index.html'))
})



router.get('/crypto',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/crypto/index.html'))
})



router.get('/autodesk',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/autodesk/index.html'))
})



router.get('/adobePP',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/adobePP/index.html'))
})



router.get('/blender',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/blender/index.html'))
})



router.get('/sqlBeg',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/sqlBeg/index.html'))
})



router.get('/wordPress',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/wordPress/index.html'))
})



router.get('/fashionD',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/fashionD/index.html'))
})



router.get('/vcl2',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/vcl2/index.html'))
})



router.get('/lotl1',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/lotl1/index.html'))
})



router.get('/lotl2',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/lotl2/index.html'))
})



router.get('/lotl3',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/lotl3/index.html'))
})

router.get('/bal2',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/bal2/index.html'))
})

router.get('/bal1',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/bal1/index.html'))
})

router.get('/bal3',(req,res)=>{
    res.sendFile(join(__dirname,'../courses/bal3/index.html'))
})











module.exports = router
