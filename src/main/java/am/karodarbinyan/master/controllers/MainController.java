package am.karodarbinyan.master.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {


    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/o-kompanii")
    public String page11() {
        return "o-kompanii";
    }


    @GetMapping("/uslugi")
    public String uslugi() {
        return "uslugi/index";
    }


    @GetMapping("/portfolio")
    public String portfolio() {
        return "portfolio/index";
    }


    @GetMapping("/novosti")
    public String novosti() {
        return "novosti/index";
    }



    @GetMapping("/prajs")
    public String prajs() {
        return "prajs";
    }

    @GetMapping("/otzyivyi")
    public String otzyivyi() {
        return "otzyivyi";
    }


    @GetMapping("/formirovanii-napravlenij-progressivnogo-razvitiya")
    public String page1() {
        return "formirovanii-napravlenij-progressivnogo-razvitiya";
    }


    @GetMapping("/idejnyie-soobrazheniya-vyisshego-poryadka-a-takzhe-slozhivshayasya-struktura")
    public String page2() {
        return "idejnyie-soobrazheniya-vyisshego-poryadka-a-takzhe-slozhivshayasya-struktura";
    }


    @GetMapping("/kap.-remont-v-novostrojke")
    public String page3() {
        return "kap.-remont-v-novostrojke";
    }


    @GetMapping("/kontaktyi")
    public String page4() {
        return "kontaktyi";
    }


    @GetMapping("/korporativnyij-otdyix-na-prirode-maj-2020")
    public String pade5() {
        return "korporativnyij-otdyix-na-prirode-maj-2020";
    }


    @GetMapping("/montazh-elektroprovodki-v-dvushke")
    public String page5() {
        return "montazh-elektroprovodki-v-dvushke";
    }


    @GetMapping("/montazh-natyazhnyix-potolkov")
    public String page6() {
        return "montazh-natyazhnyix-potolkov";
    }


    @GetMapping("/montazh-obsluzhivanie-pozharnyix-sistem-signalizaczij")
    public String page7() {
        return "montazh-obsluzhivanie-pozharnyix-sistem-signalizaczij";
    }


    @GetMapping("/montazh-sistem-videonablyudeniya")
    public String page8() {
        return "montazh-sistem-videonablyudeniya";
    }


    @GetMapping("/nachalo-povsednevnoj-rabotyi-po-formirovaniyu-poziczii")
    public String page9() {
        return "nachalo-povsednevnoj-rabotyi-po-formirovaniyu-poziczii";
    }


    @GetMapping("/nasha-komanda")
    public String page10() {
        return "nasha-komanda";
    }


    @GetMapping("/otdelka-sanuzla")
    public String page13() {
        return "otdelka-sanuzla";
    }



    @GetMapping("/poluchite-samyie-deshevyie-kvadratnyie-metryi-kotoryie-stanut-lyubimyimi")
    public String page15() {
        return "poluchite-samyie-deshevyie-kvadratnyie-metryi-kotoryie-stanut-lyubimyimi";
    }


    @GetMapping("/raznoobraznyij-i-bogatyij-opyit-postoyannoe-informaczionnoe-obespechenie")
    public String page17() {
        return "raznoobraznyij-i-bogatyij-opyit-postoyannoe-informaczionnoe-obespechenie";
    }


    @GetMapping("/raznoobraznyij-i-bogatyij-opyit-ramki-i-mesto-obucheniya-kadrov")
    public String page18() {
        return "raznoobraznyij-i-bogatyij-opyit-ramki-i-mesto-obucheniya-kadrov";
    }


    @GetMapping("/sborka-mebeli")
    public String page19() {
        return "sborka-mebeli";
    }


    @GetMapping("/stroitelstvo-bani")
    public String page20() {
        return "stroitelstvo-bani";
    }


    @GetMapping("/stroitelstvo-zagorodnogo-doma")
    public String page21() {
        return "stroitelstvo-zagorodnogo-doma";
    }


    @GetMapping("/uborka-pomeshhenij")
    public String page22() {
        return "uborka-pomeshhenij";
    }


    @GetMapping("/uslugi-elektrika")
    public String page23() {
        return "uslugi/uslugi-elektrika/index";
    }


    @GetMapping("/uslugi-raznorabochix-montazhnikov-gruzchikov")
    public String page24() {
        return "uslugi-raznorabochix-montazhnikov-gruzchikov";
    }


    @GetMapping("/uslugi-santexnika")
    public String page25() {
        return "uslugi-santexnika";
    }


    @GetMapping("/ustanovka-dushevoj-kabinyi")
    public String page26() {
        return "ustanovka-dushevoj-kabinyi";
    }


    @GetMapping("/ustanovka-dushevoj-kabinyi-portfolio")
    public String page27() {
        return "ustanovka-dushevoj-kabinyi-portfolio";
    }


    @GetMapping("/ustanovka-dverej")
    public String page28() {
        return "ustanovka-dverej";
    }


    @GetMapping("/ustanovka-elektro-shhitka")
    public String page29() {
        return "ustanovka-elektro-shhitka";
    }


    @GetMapping("/ustanovka-i-obsluzhivanie-kondiczionerov")
    public String page30() {
        return "ustanovka-i-obsluzhivanie-kondiczionerov";
    }


    @GetMapping("/ustanovka-i-obsluzhivanie-plastikovyix-okon")
    public String page31() {
        return "ustanovka-i-obsluzhivanie-plastikovyix-okon";
    }


    @GetMapping("/ustanovka-kondiczionera")
    public String page32() {
        return "ustanovka-kondiczionera";
    }


    @GetMapping("/ustanovka-kovannogo-zabora")
    public String page33() {
        return "ustanovka-kovannogo-zabora";
    }


    @GetMapping("/ustanovka-rakovinyi")
    public String page34() {
        return "ustanovka-rakovinyi";
    }


    @GetMapping("/ustanovka-schetchika")
    public String page35() {
        return "ustanovka-schetchika";
    }


    @GetMapping("/ustanovka-smesitelya")
    public String page36() {
        return "ustanovka-smesitelya";
    }


    @GetMapping("/ustanovka-stiralnoj-mashinyi")
    public String page37() {
        return "ustanovka-stiralnoj-mashin";
    }


    @GetMapping("/ustanovka-vyityazhek")
    public String page38() {
        return "ustanovka-vyityazhek";
    }


    @GetMapping("/uteplenie-i-remont-balkona")
    public String page39() {
        return "uteplenie-i-remont-balkona";
    }


    @GetMapping("/ves-maj-i-iyun-50-na-ustanovku-split-sistem-i-kondiczionerov")
    public String page40() {
        return "ves-maj-i-iyun-50-na-ustanovku-split-sistem-i-kondiczionerov";
    }


    @GetMapping("/zalivka-fundamenta-pod-kottedzh")
    public String page41() {
        return "zalivka-fundamenta-pod-kottedzh";
    }


}
