function getRandomUrl(urls) {
  return urls[Math.floor(Math.random() * urls.length)];
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function randomClicker(tab) {
  await chrome.tabs.executeScript(tab.id, {
    code: `
      const links = Array.from(document.querySelectorAll('a'));
      const buttons = Array.from(document.querySelectorAll('button'));
      const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];

      const element = randomElement([...links, ...buttons]);
      if (element) {
        element.click();
      }
    `
  });

  // Wait for page to load after click
  await sleep(5000);

  // Scroll to a random position
  await chrome.tabs.executeScript(tab.id, {
    code: `
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    `
  });
}

chrome.browserAction.onClicked.addListener(async tab => {
  const urls = [
'https://www.work.ua/','https://sportgo.com.ua/','https://makeup.com.ua/ua/','https://prom.ua/','https://parfums.ua/ua/','https://helen-marlen.com/ua/','https://born2be.ua/','https://vittorossi.ua/','https://kniga.biz.ua/','https://intertop.ua/ua/zhenshinam/','https://www.booklya.ua/','https://lavkababuin.com/','https://epicentrk.ua/','https://leboutique.com/','https://loveandlive.ua/','https://dicentra.ua/ua/','https://buketland.com.ua/','https://zelena.ua/','https://world-of-flowers.com.ua/','https://onlyrose.ua/','https://zolotoyvek.ua/ua/','https://ukrzoloto.ua/','https://sribnakraina.ua/ua/','https://amebli.com.ua/','https://bavkatoys.com/','https://dobavki.ua/','https://ua.weblium.com/','https://tehnoskarb.ua/','https://elmir.ua/','https://artos.in.ua/','https://matras-topper.com.ua/','https://dendi.ua/','https://umaumi.com/','https://hillary.ua/','https://masterzoo.ua/ua/','https://unisport.ua/','https://cupage.com.ua/','https://www.kigurumki.com.ua/','https://www.robinzon-ua.com.ua/ukr/','https://fram-equip.com/','https://luposan.com.ua/ru/','https://lordofboards.com.ua/','https://punisher.com.ua/','https://olver.in.ua/','https://mida.shop/','https://zhuk.ua/','https://www.aliexpress.com/','https://www.work.ua/','https://tabletki.ua/','https://minfin.com.ua/','https://apteka911.ua/','https://www.volta.com.ua/','https://zakupka.com/','https://dzvinok.ua/','https://vse.ua/','https://lifehacker.ru/','https://kvshop.com.ua/','https://kasta.ua/','https://vitals.ua/','https://gordonua.com/','https://skvagina.com.ua/','https://www.ttt.ua/','https://tatragarden.ua/','https://www.bezpeka-shop.com/','https://planeta-instrument.com.ua/','https://noteboochek.com.ua/','https://novaposhta.ua/','https://allo.ua/','https://wondertech.com.ua/','https://220volt.com.ua/','https://ek.ua/','https://universaltools.com.ua/','https://itmag.ua/','https://motodnepr.ua/','https://www.motoblok.biz/','https://sport.ua/','https://ultrasale.com.ua/','https://www.minus.lviv.ua/','https://naurok.com.ua/','https://pc.com.ua/','https://domik.ua/','http://www.intertelecom.ua/','https://svarmax.com.ua/','https://newsone.ua/','https://www.liga.net/','https://www.ctrs.com.ua/','https://aquapolis.ua/','https://dnipro-m.ua/','https://vista.ua/','https://agreemarket.com.ua/','https://romb.ua/','https://brain.com.ua/','https://www.itbox.ua/','http://rozetka.com.ua/','https://shafa.ua/','https://vovk.com/','http://comfy.ua/','https://intertop.ua/','https://thesolesupplier.co.uk/','https://adidas.com/','https://hotline.ua/','https://kasta.ua/','http://crafta.ua/','https://www.ebay.com/','https://lootcrate.com/','https://leboutique.com/','https://md-fashion.com.ua/','https://anabel-arto.com/','http://luxoptica.ua/','https://royalfashion.com.ua/','https://rozetka.com.ua/','https://f.ua/','https://ananasko.com/','https://www.samsung.com/ua/','https://www.indiatimes.com/','https://www.tripadvisor.com/','https://megogo.net/ru/','https://shafa.ua/','https://ru.pinterest.com/','https://ru.depositphotos.com/','https://stock.adobe.com/ru/photos/','https://pixabay.com/ru/','https://www.olx.pt/','https://www.instagram.com/?hl=ru/','https://ru.stackoverflow.com/questions/','https://zhuk.ua','https://alfagold.org','https://vacancies.futurepeople.pro','https://genesis.kr.ua','https://artdelux.site','https://sonex.ua','https://landings.esade.edu','https://ivmed.mamasur.com.ua','https://www.ninjaone.com','https://mrcl-blds.garrisons.space','https://new.enterio.com.ua','https://bealoove.com','https://spaceromega.com','https://arsenchik.com.ua','http://profline-tools.shop','https://verashop.in','https://dress1.proskidki.com.ua','https://kyivstar.ua','https://anbud.ua','https://www.chainupad.com','https://xiaomi-powerbank.com.ua','https://edin.ua','https://www.99generator.space','https://store.quadro.ua','https://www.atmosfera.ua','https://friendlic.clinic','https://kulturaprodazh.com.ua','https://lido.ua','https://kotel.mzv.com.ua','https://oliz.com.ua','https://travel.vn.ua','http://www.godsaidmansaid.com','https://www.staff-clothes.com','https://mumscare.com.ua','https://travelroom.lviv.ua','https://realeng.studyacademy.ua','https://kurtka9180.bestpromag.com.ua','https://tceh.com.ua','https://ukrizra.com','https://www.rmc-med.com.ua','http://lonza.shoes','https://sunwin.com.ua','https://port.lviv.ua','https://konfiskat.ua','https://school.inventorschool.org.ua','https://finmap.online','https://liliyasadova.jeteem.space','https://dream-secret.in.net','https://nutscity.com.ua','http://grand-bugai-ville.tilda.ws','https://artglina.com.ua','https://www.foxtrot.com.ua','https://nabor25.tovarochka.fun','https://itstep.dp.ua','https://generatorinua.space','https://risk-manager.gerchikfx.com','https://inthecator.com','https://lp.ninelestyle.com','https://vsporte.com.ua','https://salesmag.shop','http://www.benson-knives.space','https://www.fanpagekarma.com','https://garnyi.shop','https://artdelux.fun','https://best-time.biz','https://fenix-shop.in.ua','https://powerbank-alt-energy.com.ua','https://artdelux.club','https://dvi-podushky.com','https://highschool.com.ua','https://twlv.ua','https://www.oceanfish.space','http://05.dbra.com.ua','https://bazashop.online','https://nizhnapostil.shop','https://kyiv.gerasport.com','http://gold-diamond.space','https://svits.org.ua','https://osadchiy.org','https://rsu.ua','https://coton.in.ua','https://atlantiktools.com.ua','https://www.womanfashion.website','https://erudit-inclusion.com','https://www.flintfox.com','https://landing.zipify.com','https://upwuk.com','https://unitbud-1.com.ua','https://niimbot.com.ua','https://prjctr.com','https://margulanlife.tilda.ws','https://kr.itstep.org','https://www.enlivant.com','https://crons.com.ua/','https://podkradylin.com/','https://rosabella.ua/','https://smartmag.biz.ua/','https://chicco.com.ua/','https://broskin.com.ua/','https://shopmonkeys.ua/','https://sonex.ua/','https://helen-marlen.com/','https://www.fanpagekarma.com/','https://www.kimonesbeautybar.com/','https://homefood.ua/','https://ua-opt.com.ua/','https://goodwinehome.com.ua/','https://dovbush.net/','https://gloriaromana.com/','https://aromaburo.ua/','https://mrscrubber.com/','https://hollyskin.com.ua/','https://mumscare.com.ua/','https://mattras.com.ua/','https://vsporte.com.ua/','https://kameron.ua/','https://sumnavivtsa.com/','https://www.yakaboo.ua','https://podushka.com.ua','https://macincase.com.ua','https://prostor.ua','https://bigl.ua','https://pinterest.com','https://thefreedictionary.com','https://timeanddate.com','https://indiatimes.com','https://flashscore.ua','https://megogo.net','https://booking.com','https://soundcloud.com','https://usnews.com','https://ananasko.com','https://rozetka.com.ua','https://adme.media','https://caranddriver.com','https://iherb.com','https://work.ua','https://tabletki.ua','https://sweet.tv','https://adobe.com','https://coffeeagent.com.ua','https://crafta.ua','https://likee.video','https://pexels.com','https://pixabay.com','https://depositphotos.com','https://ufreida.com.ua/','https://mermade.com.ua','https://woodmost.com.ua','https://zakupka.com','https://artos.in.ua','https://malva-dreams.com.ua','https://bydresscode.com.ua','https://mnogobor.com.ua','https://goodwinehome.com.ua','https://housebrand.com','https://etyshops.com','https://ru.investing.com','https://mylo.id','https://rabota.ua','https://theguardian.com','https://premierleague.com','https://flashscore.com','https://prom.ua','https://spanishdict.com','https://ebay.com','https://eobuv.com.ua/','https://nutsboom.com.ua/','https://stylnisumky.com.ua/','https://samsungshop.com.ua/','https://theicon.ua/','https://meblival.com.ua/','https://www.astratex.ua/','https://twlv.ua/','https://viskonta.com/','https://panties.com.ua/','https://be-safe.com.ua/','https://smash.com.ua/','https://akvalend.ua/','https://tsn.ua/','https://brand-centr.com/','https://eversolid.com.ua/','https://zolotakraina.ua/','https://parmezan-store.com.ua/','https://modoza.com/','https://meatbar.com.ua/','https://store.quadro.ua/','https://shop.gbar.ua/','https://handwork.studio/','https://pet-fashion.com.ua/','https://molliua.com/','https://maxstep.ua/','https://news.obozrevatel.com/','https://4team.store/','https://aurum.in.ua/','https://skripka.com.ua/','https://mikkey.store/','https://www.lapstore.com.ua/','https://alisa.ua/','https://glosscompany.ua/','https://oui.com.ua/','https://nimpha.ua/'
  
  ];
  while (true) {
    const url = getRandomUrl(urls);
    await chrome.tabs.update(tab.id, {url});
    await sleep(5000);
    await randomClicker(tab);
    await sleep(5000);
    await randomClicker(tab);
    await sleep(5000);
  }
});
