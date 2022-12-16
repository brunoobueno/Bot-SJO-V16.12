const frases = require("../Frases/frases");
const banco = require("../banco");

function execute(user, msg) {

  if (user == '5512991294959@c.us' || user == '5512982825521@c.us' || user == '5512996141357@c.us' || user == '5543999143352@c.us' || user == '5512997652659@c.us' || user == '5512996159844@c.us' || user == '551231052521@c.us' || user == '5512997746738@c.us' || user == '5512991781622@c.us' || user == '55982482149@c.us' || user == '5541997559546@c.us' || user == '5512981421779@c.us' || user == '5512996306607@c.us' || user == '5512981638097@c.us' || user == '5512997827776@c.us' || user == '5512992518976@c.us' || user == '5512996392160@c.us' || user == '5512981180519@c.us' || user == '551231051500@c.us' || user == '5512997006946@c.us' || user == '5512981178490@c.us' || user == '5512991164412@c.us' || user == '5512981164729@c.us' || user == '5512997221288@c.us' || user == '5512997451276@c.us' || user == '5512996706103@c.us' || user == '5512997951878@c.us' || user == '5512982826781@c.us' || user == '5512991405608@c.us' || user == '5512996430029@c.us' || user == '5512991842828@c.us' || user == '5512997297383@c.us' || user == '5512992297755@c.us' || user == '5541996908628@c.us' || user == '5547991215994@c.us' || user == '5512981364114@c.us' || user == '551128325777@c.us' || user == '5512992395757@c.us' || user == '5511950454106@c.us' || user == '5511976263781@c.us' || user == '5511959116715@c.us' || user == '5512982150001@c.us' || user == '5511947301850@c.us' || user == '5512982208493@c.us' || user == '5512974085427@c.us' || user == '5512997241867@c.us' || user == '5512991377498@c.us' || user == '5511946639370@c.us' || user == '5512997779773@c.us' || user == '5511999886874@c.us' || user == '5512996332657@c.us' || user == '5512993896356@c.us' || user == '5512996821995@c.us' || user == '5541996908628@c.us' || user == '5511934323464@c.us' || user == '5511934114957@c.us' || user == '5512997191131@c.us' || user == '55996537225@c.us' || user == '5512996329972@c.us' || user == '551128325777@c.us' || user == '5512991742170@c.us' || user == '5511971919940@c.us' || user == '5512991161373@c.us' || user == '5512991098342@c.us' || user == '5512997403831@c.us' ) {
  banco.db[user].stage = 5;
} else {

  banco.db[user].stage = 1;
  return [ frases.Menu , frases.Ola ];
}

}

exports.execute = execute;
