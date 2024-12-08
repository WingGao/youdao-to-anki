/* ********用户自定义配置区开始******** */
// 可直接在词典里搜索以下任意词条，进入配置界面，常用配置无需修改此 js 文件。
// 'oaldpeconfig', 'oaldpecfg', 'oaldcfg', 'opcfg', 'oaldconfig', 'opconfig', 'opc'

var oaldpeConfig = {
    /******** 中文翻译相关 ********/
    // 【配置项1：中文翻译选项】（点击 “O10” 小图标，可显示/隐藏中文翻译）
    // 选项（默认为1）：0-全部隐藏，1-全部显示，2-仅隐藏例句中文，3-仅显示例句中文，4-仅隐藏释义中文，5-仅显示释义中文
    showTranslation: 1,

    // 【配置项2：是否使用繁体中文翻译】
    // 选项（默认为0）：0-简体，1-繁体（香港），2-繁体（台湾），3-繁体（台湾，带词组转换）
    showTraditional: 0,

    // 【配置项3：是否启用英文点译功能】（单句显示/隐藏中文）
    // 选项（默认为false）：false=否，true=是
    touchToTranslate: false,

    // 【配置项4：是否例句中文独占一行】
    // 选项（默认为true）：false=否，true=是
    examplesChineseBeAlone: true,

    /******** 词性导航栏 ********/
    // 【配置项5：是否显示词性导航栏】
    // 选项（默认为true）：false=不显示，true=显示
    showNavbar: true,

    // 【配置项6：是否选中词性导航栏 All】（当【是否显示词性导航栏】设置为 false 时，始终显示所有词性，此设置无效）
    // 选项（默认为false）：false=否，true=是
    selectNavbarAll: true,

    /******** 单词、例句发音，图片显示 ********/
    // 【配置项7：是否显示音节划分】（点击单词可切换音节划分）
    // 选项（默认为false）：false=不显示，true=显示
    showSyllable: false,

    // 【配置项8：是否启用在线单词发音】（如果为 true，则可删除 oaldpe.1.mdd 文件）
    // 选项（默认为false）：false=否，true=是
    onlineWordPron: false,

    // 【配置项9：是否启用在线图片】（如果为 true，则可删除 oaldpe.2.mdd 文件。注：在线图片无中文翻译）
    // 选项（默认为false）：false=否，true=是
    onlineImage: false,

    // 【配置项10：离线图片翻译选项】（当【是否启用在线图片】设置为 true 时，图片翻译无效）
    // 选项（默认为3）：0-不使用翻译，1-简体中文翻译，2-港版繁体翻译，3-根据配置项【中文翻译选项】和配置项【是否使用繁体中文翻译】自动选择
    imgTranslationOpt: 3,

    // 【配置项11：是否默认英音例句发音】（点击 “O10” 小图标中的词典铭牌进行切换）
    // 选项（默认为false）：false=美音，true=英音
    defaultBritishExPron: false,

    // 【配置项12：官方例句发音选项】（如果为 1 或 2，则可删除 oaldpe.3.mdd 文件）
    // 选项（默认为1）：0-启用官方离线例句发音，1-启用官方在线例句发音，2-不启用官方例句发音
    officialExPronOpt: 1,

    // 【配置项13：无官方例句发音时，是否启用在线 TTS 发音】（需要高版本浏览器内核。发音图标带下划线）
    // 选项（默认为true）：false=否，true=是
    enableOnlineTTS: false,

    // 【配置项14：TTS 英音发音配置】
    // 选项（默认为英音男1）：英音男1，英音男2，英音女1，英音女2，英音女3
    britishTTS: '英音男1',

    // 【配置项15：TTS 美音发音配置】
    // 选项（默认为美音女4）：美音男1，美音男2，美音男3，美音男4，美音男5，美音女1，美音女2，美音女3，美音女4
    americanTTS: '美音女4',

    /******** 内容精简，显示控制 ********/
    // 【配置项16：是否简化词性】（如 verb 简化为 v.）
    // 选项（默认为false）：false=不简化，true=简化
    simplifyPos: false,

    // 【配置项17：是否简化语法】（如 [transitive] 简化为 [t]）
    // 选项（默认为false）：false=不简化，true=简化
    simplifyGrammar: false,

    // 【配置项18：是否简化非例句中的 something/somebody 为 sth./sb.】
    // 选项（默认为true）：false=不简化，true=简化
    simplifySthSb: false,

    // 【配置项19：例句前的固定搭配使用代字号】（如把 take sth with you 替换为 ~ sth with you）
    // 选项（默认为false）：false=不使用，true=使用
    usePlaceholder: false,

    // 【配置项20：给固定搭配添加荧光笔下划线】
    // 选项（默认为false）：false=不添加，true=添加
    phrasesAddUnderline: false,

    /******** 折叠控制 ********/
    // 【配置项21：是否展开释义】
    // 选项（默认为true）：false=否，true=是
    unfoldSense: true,

    // 【配置项22：是否展开折叠块】（浅蓝色折叠区，如 Extra Examples 更多例句）
    // 选项（默认为false）：false=不展开，true=展开
    unfoldUnbox: true,

    // 【配置项23：是否展开 Phrase Sections】（习语 Idioms、词组 Phrasal Verbs）
    // 选项（默认为false）：false=不展开，true=展开
    unfoldPhraseSections: true,

    // 【配置项24：点击 Idioms、Phrasal Verbs 跳转后，自动展开内容】
    // 选项（默认为true）：false=不展开，true=展开
    jumpsUnfold: true,

    // 【配置项25：点击小火箭返回后，自动折叠内容】
    // 选项（默认为true）：false=不折叠，true=折叠
    leavesFold: true,

    /******** 欧路词典相关 ********/
    // 【配置项26：是否在手机 Eudic 里使用更大的屏宽】
    // 选项（默认为true）：false=否，true=是
    widerScreenEudic: true,

    // 【配置项27：是否移除 Eudic 单词界面词头】（词典自带发音、生词等级等）
    // 选项（默认为true）：false=不移除，true=移除
    removeEudicHeader: true,

    // 【配置项28：是否自动折叠 Eudic 学习笔记】
    // 选项（默认为false）：false=不自动折叠，true=自动折叠
    autoFoldEudicNote: false,

    /******** 其他功能 ********/
    // 【配置项29：是否自动跟随系统深色模式】
    // 选项（默认为true）：false=否，true=是
    autoDarkMode: true,

    // 【配置项30：是否启用 Eruda Console】（用于词典应用调试）
    // 选项（默认为true）：false=否，true=是
    enableErudaConsole: true,

    /******** 其他自定义配置（仅支持通过此js文件修改） ********/
    // 【配置项31：自动展开折叠块开关】（浅蓝色折叠区，仅在【是否展开折叠块】为 false 时生效）
    // 选项（默认仅展开词源）：false=不展开，true=展开
    autoUnfoldUnbox: {
        'british_american': false, // British/American (英式 / 美式)
        'colloc': false,           // Collocations (词语搭配)
        'cult': false,             // Culture (文化)
        'express': false,          // Express Yourself (情景表达)
        'extra_examples': false,   // Extra Examples (更多例句)
        'grammar': false,          // Grammar Point (语法说明)
        'homophone': false,        // Homophones (同音词)
        'langbank': false,         // Language Bank (用语库)
        'mlt': false,              // More Like This (同类词语学习)
        'more_about': false,       // More About (补充说明)
        'snippet': false,          // Oxford Collocations Dictionary (牛津搭配词典)
        'synonyms': false,         // Synonyms (同义词辨析)
        'verbforms': false,        // Verb Forms (动词形式)
        'vocab': false,            // Vocabulary Building (词汇扩充)
        'which_word': false,       // Which Word? (词语辨析)
        'wordfamily': false,       // Word Family (词族)
        'wordfinder': false,       // Wordfinder (联想词)
        'wordorigin': true,        // Word Origin (词源)
    },
};
/* ********用户自定义配置区结束******** */

function ox10Main() {

    const OALDPE_PREFIX_WORD_UK = 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/';
    const OALDPE_PREFIX_WORD_US = 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/';
    const OALDPE_PREFIX_EXAMPLE = 'https://oxford-x-file.oss-cn-hangzhou.aliyuncs.com/audio/xgs/xgs_audio/';
    const OALDPE_PREFIX_FULL_IMAGE = 'https://www.oxfordlearnersdictionaries.com/us/media/english/fullsize/';
    const OALDPE_PREFIX_THUMB_IMAGE = 'https://www.oxfordlearnersdictionaries.com/us/media/english/thumb/';

    const OALDPE_BRITISH_TTS_OPTION = ['英音男1', '英音男2', '英音女1', '英音女2', '英音女3'];
    const OALDPE_AMERICAN_TTS_OPTION = ['美音男1', '美音男2', '美音男3', '美音男4', '美音男5', '美音女1', '美音女2', '美音女3', '美音女4'];

    const OALDPE_PREFIX_LOCALSTORAGE = 'OALDPE_'

    const OALDPE_POS = {
        'noun': 'n.',
        'adjective': 'adj.',
        'adverb': 'adv.',
        'abbreviation': 'abbr.',
        'adverb, adjective': 'adv., adj.',
        'verb': 'v.',
        'phrasal verb': 'phr. v.',
        'exclamation': 'interj.',
        'idiom': 'idiom',
        'conjunction': 'conj.',
        'preposition': 'prep.',
        'modal verb': 'modal v.',
        'combining form': 'comb. form',
        'prefix': 'prefix',
        'linking verb': 'link. v.',
        'suffix': 'suffix',
        'number': 'num.',
        'pronoun': 'pron.',
        'ordinal number': 'ordinal num.',
        'determiner': 'det.',
        'auxiliary verb': 'aux. v.',
        'indefinite article': 'indef. a.',
        'definite article': 'def. a.',
        'infinitive marker': 'inf. marker',
        'symbol': 'symbol',
        'adjective, adverb': 'adj., adv.',
        'adverb, preposition': 'adv., prep.',
        'noun, adjective': 'n., adj.',
        'short form': 'short form',
        'noun, exclamation': 'n., interj.',
        'exclamation, noun': 'interj., n.',
        'determiner, pronoun': 'det., pron.',
        'preposition, adverb': 'prep., adv.',
        'adjective, exclamation': 'adj., interj.',
        'preposition, conjunction, adverb': 'prep., conj., adv.',
        'adjective, adverb, exclamation': 'adj., adv., interj.',
        'adjective, noun': 'adj., n.',
        'adverb, exclamation': 'adv., interj.',
        'noun, determiner': 'n., det.',
        'determiner, pronoun, adverb': 'det., pron., adv.',
        'conjunction, preposition': 'conj., prep.',
        'adverb, pronoun, conjunction': 'adv., pron., conj.',
        'determiner, adjective': 'det., adj.',
        'determiner, ordinal number': 'det., ordinal num.',
        'noun, abbreviation': 'n., abbr.',
        'exclamation, adjective': 'interj., adj.',
        'conjunction, adverb': 'conj., adv.',
        'adjective, pronoun': 'adj., pron.',
        'number, determiner': 'num., det.',
        'noun, verb': 'n., v.',
        'pronoun, determiner': 'pron., det.',
        'preposition, conjunction': 'prep., conj.',
        'exclamation, adverb, pronoun': 'interj., adv., pron.',
        'adverb, conjunction': 'adv., conj.',
        'adverb, noun': 'adv., n.',
    }

    const OALDPE_GRAMMAR = {
        '[uncountable]': '[U]',
        '[only before noun]': '[only bf N]',
        '[singular]': '[sing]',
        '[countable]': '[C]',
        '[countable, uncountable]': '[C, U]',
        '[after noun]': '[aft N]',
        '[not before noun]': '[not bf N]',
        '[usually before noun]': '[usu bf N]',
        '[usually singular]': '[usu sing]',
        '[uncountable, countable]': '[U, C]',
        '[intransitive, transitive]': '[I, T]',
        '[usually passive]': '[usu psv]',
        '[plural]': '[pl]',
        '[transitive]': '[T]',
        '[uncountable, singular]': '[U, sing]',
        '[intransitive]': '[I]',
        '[often passive]': '[oft psv]',
        '[not usually before noun]': '[not usu bf N]',
        '[singular, uncountable]': '[sing, U]',
        '[uncountable, plural]': '[U, pl]',
        '[usually plural]': '[usu pl]',
        '[countable, usually plural]': '[C, usu pl]',
        '[uncountable, countable, usually singular]': '[U, C, usu sing]',
        '[transitive, intransitive]': '[T, I]',
        '[intransitive, transitive, often passive]': '[I, T, oft psv]',
        '[transitive, often passive]': '[T, oft psv]',
        '[countable, usually singular]': '[C, usu sing]',
        '[countable + singular or plural verb]': '[C + sing or pl V]',
        '[uncountable + singular or plural verb]': '[U + sing or pl V]',
        '[transitive, usually passive]': '[T, usu psv]',
        '[transitive, often passive, intransitive]': '[T, oft psv, I]',
        '[no passive]': '[no psv]',
        '[countable, usually singular, uncountable]': '[C, usu sing, U]',
        '[countable, usually plural, uncountable]': '[C, usu pl, U]',
        '[plural, singular or plural verb]': '[pl, sing or pl V]',
        '[singular + singular or plural verb]': '[sing + sing or pl V]',
        '[countable, singular, uncountable]': '[C, sing, U]',
        '[intransitive, transitive, no passive]': '[I, T, no psv]',
        '[transitive, no passive]': '[T, no psv]',
        '[uncountable, countable, usually plural]': '[U, C, usu pl]',
        '[plural, uncountable]': '[pl, U]',
        '[countable + singular or plural verb, uncountable]': '[C + sing or pl V, U]',
        '[transitive, intransitive, often passive]': '[T, I, oft psv]',
        '[intransitive, transitive, usually passive]': '[I, T, usu psv]',
        '[transitive, usually passive, intransitive]': '[T, usu psv, I]',
        '[countable, plural]': '[C, pl]',
        '[singular or plural verb]': '[sing or pl V]',
        '[countable, uncountable + singular or plural verb]': '[C, U + sing or pl V]',
        '[uncountable + singular or plural verb, countable]': '[U + sing or pl V, C]',
        '[countable, singular]': '[C, sing]',
        '[uncountable, countable, singular]': '[U, C, sing]',
        '[countable, singular + singular or plural verb]': '[C, sing + sing or pl V]',
        '[singular + singular or plural verb, uncountable]': '[sing + sing or pl V, U]',
        '[transitive, no passive, intransitive]': '[T, no psv, I]',
        '[usually singular, uncountable]': '[usu sing, U]',
        '[transitive, intransitive, usually passive]': '[T, I, usu psv]',
    }

    const oaldpeConfigDuplicate = Object.assign({}, oaldpeConfig);

    const isLocalStorageAvailable = (function () {
        try {
            localStorage.setItem('__test__', '__test__');
            localStorage.removeItem('__test__');
            return true;
        } catch { return false; }
    })();

    updateConfigFromLocalStorage();

    oaldpeConfigEvent();

    function updateConfigFromLocalStorage() {
        if (!isLocalStorageAvailable) return;

        Object.keys(localStorage).forEach(key => {
            if (!key.startsWith(OALDPE_PREFIX_LOCALSTORAGE)) return;
            const localStorageValue = localStorage.getItem(key);

            const oaldpeConfigKey = key.replace(OALDPE_PREFIX_LOCALSTORAGE, '');
            const oaldpeConfigValue = oaldpeConfig[oaldpeConfigKey];

            /* convert from localStorage string to oaldpeConfig type */
            if (oaldpeConfigKey === 'britishTTS') {
                oaldpeConfig[oaldpeConfigKey] = OALDPE_BRITISH_TTS_OPTION[parseInt(localStorageValue)];
            } else if (oaldpeConfigKey === 'americanTTS') {
                oaldpeConfig[oaldpeConfigKey] = OALDPE_AMERICAN_TTS_OPTION[parseInt(localStorageValue)];
            } else if (typeof oaldpeConfigValue === 'number') {
                oaldpeConfig[oaldpeConfigKey] = parseInt(localStorageValue);
            } else if (typeof oaldpeConfigValue === 'boolean') {
                oaldpeConfig[oaldpeConfigKey] = localStorageValue === '1';
            }
        });
    }

    function updateConfigToUI() {
        Object.keys(oaldpeConfig).forEach(oaldpeConfigKey => {
            const oaldpeConfigValue = oaldpeConfig[oaldpeConfigKey];
            const $select = $(`#oaldpe-config .config-item[id="${oaldpeConfigKey}"] > .select`);

            /* convert from oaldpeConfig type to index number */
            if (oaldpeConfigKey === 'britishTTS') {
                $select.attr('cfg-selected', OALDPE_BRITISH_TTS_OPTION.indexOf(oaldpeConfigValue));
            } else if (oaldpeConfigKey === 'americanTTS') {
                $select.attr('cfg-selected', OALDPE_AMERICAN_TTS_OPTION.indexOf(oaldpeConfigValue));
            } else if (typeof oaldpeConfigValue === 'number') {
                $select.attr('cfg-selected', oaldpeConfigValue);
            } else if (typeof oaldpeConfigValue === 'boolean') {
                $select.attr('cfg-selected', oaldpeConfigValue ? 1 : 0);
            }
        });
    }

    function oaldpeConfigEvent() {
        if (!$('#oaldpe-config').length) return;

        updateConfigToUI(); // 初始化配置

        const $allSelect = $('#oaldpe-config .config-item > .select').each(function () {
            const $select = $(this);
            const $options = $select.children('.option');
            const selectedIndex = $select.attr('cfg-selected');

            const fullHeight = $select.height();
            const selectedHeight = $options.eq(selectedIndex).outerHeight();

            $select.on('click', function (event) {
                event.stopPropagation();
                const $target = $(event.target);
                if ($select.hasClass('unfolded')) {
                    if ($target.hasClass('option')) $select.attr('cfg-selected', $target.index());
                    $select.animate({ height: selectedHeight }, {
                        duration: 300,
                        complete: function () {
                            $options.each(function (index) {
                                $(this).toggle(index.toString() === $select.attr('cfg-selected'));
                            });
                        }
                    });
                } else {
                    $options.show();
                    $select.animate({ height: fullHeight }, { duration: 300 });
                }
                $select.toggleClass('unfolded');
            });

            // 高亮选项
            $options.hover(
                function () { $(this).addClass('highlighted'); },
                function () { $(this).removeClass('highlighted'); }
            );
        });

        // 初始化选项
        $allSelect.addClass('unfolded').trigger('click');

        // 点击其他地方收起
        $(document).on('click', function (event) {
            if (!$(event.target).closest('.select').length) {
                $allSelect.filter('.unfolded').trigger('click');
            }
        });

        if (!isLocalStorageAvailable) {
            $('#oaldpe-config .head-title')
                .append('（已禁用，请直接修改 JS 文件）')
                .css('color', 'red');

            $('#oaldpe-config button')
                .prop('disabled', true)
                .css('background-color', '#999')
                .css('cursor', 'unset');

            return;
        }

        $('#oaldpe-config button[type="submit"]').on('click', function () { // 保存配置
            $allSelect.addClass('unfolded').trigger('click');

            $allSelect.each(function () {
                const $select = $(this);
                const oaldpeConfigKey = $select.parent('.config-item').attr('id');
                const value = $select.attr('cfg-selected');
                localStorage.setItem(OALDPE_PREFIX_LOCALSTORAGE + oaldpeConfigKey, value);
            });

            const $button = $(this);
            $button.text('保存配置完毕！');
            setTimeout(function () { $button.text('保存配置'); }, 1000);
        });

        $('#oaldpe-config button[type="reset"]').on('click', function () { // 重置配置
            $allSelect.addClass('unfolded').trigger('click');

            Object.keys(localStorage)
                .filter(key => key.startsWith(OALDPE_PREFIX_LOCALSTORAGE))
                .forEach(key => localStorage.removeItem(key));

            oaldpeConfig = oaldpeConfigDuplicate;
            updateConfigToUI();

            const $button = $(this);
            $button.text('重置配置完毕！');
            setTimeout(function () { $button.text('重置配置'); }, 1000);
        });
    }

    $('.oaldpe').each(function () {
        const $oaldpe = $(this);
        if ($oaldpe.attr('script-loaded') === 'true') return;
        $oaldpe.attr('script-loaded', 'true');

        // region 初始化
        const $oald = $oaldpe.find('.oald');
        const $webtop = $oaldpe.find('.entry > .top-container .webtop');

        setupHeadword();

        setupConfigGear();

        setupNavigation();

        detectDarkModeEnabled();

        function setupHeadword() {
            $webtop.each(function () {
                const $headword = $(this).children('.headword');
                const syllable = $headword.attr('syllable');
                const headword = $headword.attr('headword');

                const toggleSyllable = function () {
                    if (window.getSelection().toString().length > 0) return; // 有文本被选中
                    const newHTML = $headword.text().includes('·')
                        ? $headword.html().replace(syllable, headword)
                        : $headword.html().replace(headword, syllable);
                    $headword.html(newHTML);
                };

                if (syllable) {
                    $headword.css('cursor', 'pointer').on('click', toggleSyllable);

                    if (oaldpeConfig.showSyllable) {
                        toggleSyllable();
                    }
                }
            });
        }

        function setupConfigGear() {
            const $configGear = $('<div>', { class: 'oaldpe-config-gear' });
            const $configGearHead = $('<div>', { class: 'oaldpe-config-gear__head' })
                .append($('<div>', { class: 'oaldpe-config-gear__head__brand' })
                    .append($('<div>', { class: 'dictname' })
                        .append([
                            $('<span>', { class: 'abbv', text: 'OALD' }),
                            $('<span>', { class: 'ver', text: ' 10th ' }),
                            'edition'
                        ])
                    )
                    .append($('<div>', { class: 'dictarts', text: '—— Artworks from OXFORD' }))
                )
                .append($('<div>', { class: 'oaldpe-config-gear__head__icon' }));
            const $configGearBody = $('<div>', { class: 'oaldpe-config-gear__body' });
            $configGear.append($configGearHead, $configGearBody);

            if ($webtop.length) {
                $webtop.first().prepend($configGear);
            } else {
                const $container = $oaldpe.children('.idm-g');
                $container.first().prepend($configGear);
            }

            const configItems = [
                { label: 'Autofold Eudic Note', oaldpeConfigKey: 'autoFoldEudicNote', options: ['on', 'off'] },
                { label: 'Online Example Pron', oaldpeConfigKey: 'officialExPronOpt', options: ['on', 'off'] },
                { label: 'Default Example Pron', oaldpeConfigKey: 'defaultBritishExPron', options: ['BrE', 'NAmE'] },
                // { label: 'Eruda Console', prefix: 'Eruda', options: ['show', 'input', 'hide'] },
            ];

            configItems.forEach(item => {
                if (item.oaldpeConfigKey === 'autoFoldEudicNote' && !isEudic()) return;
                if (item.oaldpeConfigKey === 'officialExPronOpt' && oaldpeConfig.officialExPronOpt === 2) return;
                if (item.oaldpeConfigKey === 'defaultBritishExPron' && oaldpeConfig.officialExPronOpt === 2) return;
                if (item.prefix === 'Eruda' && !oaldpeConfig.enableErudaConsole) return;

                const $configGroup = $('<div>', { class: 'config-group' });
                const $label = $('<div>', { class: 'config-group__label', text: item.label });
                const $options = $('<div>', { class: 'config-group__options' });

                item.options.forEach(option => {
                    const optionId = `${item.oaldpeConfigKey ? item.oaldpeConfigKey : item.prefix}_${option}`;
                    $options.append($('<span>', { id: optionId, text: option }));
                });

                $configGroup.append($label).append($options);
                $configGearBody.append($configGroup);
            });

            function handleConfig(oaldpeConfigKey, initActiveClass, booleanTrueEquvalent) {
                const $options = $configGearBody.find(`[id^="${oaldpeConfigKey}_"]`);
                const $initActiveElement = $options.filter(`#${oaldpeConfigKey}_${initActiveClass}`);

                $initActiveElement.addClass('active');

                $options.on('click', function () {
                    const $option = $(this);

                    $option.addClass('active');
                    $option.siblings().removeClass('active');

                    const booleanValue = $option.attr('id') === `${oaldpeConfigKey}_${booleanTrueEquvalent}`;
                    if (isLocalStorageAvailable) {
                        localStorage.setItem(OALDPE_PREFIX_LOCALSTORAGE + oaldpeConfigKey, booleanValue ? '1' : '0');
                    }

                    // Take effect immediately
                    if (oaldpeConfigKey === 'officialExPronOpt') {
                        $oaldpe.attr('online-example-pron', booleanValue ? 'true' : 'false');
                    }
                });
            }

            // Autofold Eudic Note
            if (isEudic()) {
                handleConfig('autoFoldEudicNote', oaldpeConfig.autoFoldEudicNote ? 'on' : 'off', 'on');
            }

            if (oaldpeConfig.officialExPronOpt !== 2) {
                // Online Example Pron
                handleConfig('officialExPronOpt', oaldpeConfig.officialExPronOpt ? 'on' : 'off', 'on');

                // Default Example Pron
                $oaldpe.attr('pron', oaldpeConfig.defaultBritishExPron ? 'uk' : 'us');
                $configGear.find('.oaldpe-config-gear__head__brand').on('click', function () {
                    const currentPron = $oaldpe.attr('pron');
                    $oaldpe.attr('pron', currentPron === 'uk' ? 'us' : 'uk');
                });
                handleConfig('defaultBritishExPron', oaldpeConfig.defaultBritishExPron ? 'BrE' : 'NAmE', 'BrE');
            }
        }

        function setupNavigation() {
            if (!oaldpeConfig.showNavbar || $oald.length <= 1) {
                $oald.addClass('visible');
                return;
            }

            // Switch control of visibility to JavaScript
            $oald.first().addClass('visible'); // avoid reflow

            const $navbar = $('<div>').addClass('oaldpe-nav').prependTo($oaldpe);
            $webtop.each(function () {
                const $this = $(this);
                const $pos = $this.children('.pos');
                const $headword = $this.children('.headword');
                const $span = $('<span>').appendTo($navbar);
                $span.text($pos.text() || $headword.text());
            });

            // Additional span for "All" and default active state setup
            const $spanAll = $('<span>').text('All').appendTo($navbar);
            const $navbarSpan = $navbar.children('span');

            if (oaldpeConfig.selectNavbarAll) {
                $spanAll.addClass('active');
                $oald.addClass('visible');
            } else {
                $navbarSpan.first().addClass('active');
                $oald.first().addClass('visible');
            }

            // Handle navbar clicks
            const $configGear = $oaldpe.find('.oaldpe-config-gear');
            $navbar.on('click', 'span', function () {
                const $clickedSpan = $(this);
                if ($clickedSpan.hasClass('active')) return;

                $clickedSpan.addClass('active');
                $clickedSpan.siblings().removeClass('active');

                if ($clickedSpan.is($spanAll)) {
                    $oald.addClass('visible');
                    $webtop.first().prepend($configGear);
                } else {
                    const index = $navbarSpan.index($clickedSpan);
                    $oald.removeClass('visible').eq(index).addClass('visible');
                    $webtop.eq(index).prepend($configGear);
                }
            });
        }

        function detectDarkModeEnabled() {
            if (!oaldpeConfig.autoDarkMode) return;

            if (!isGoldenDict() && !isEudic()) {
                const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const handleThemeChange = (event) => {
                    const isDarkMode = event.matches;
                    $oaldpe.attr('data-theme', isDarkMode ? 'dark' : 'light');
                    if (isPreview()) $('body').css('background-color', isDarkMode ? 'rgb(26, 26, 26)' : '');
                };

                handleThemeChange(darkModeMediaQuery); // Initial check
                darkModeMediaQuery.addEventListener('change', handleThemeChange); // Listen for changes

                return;
            }

            if (isGoldenDict()) {
                $oaldpe.attr('data-theme', $('html').attr('data-darkreader-scheme') === 'dark' ? 'dark' : 'light');
                return;
            }

            // Delete the Eudic fixed style to prevent conflicts
            $oaldpe.siblings('.eudic_custom_night').remove(); // Initial check
            if (!$oaldpe.parent().attr('observer-attached')) {
                new MutationObserver((mutationsList) => {
                    mutationsList.forEach((mutation) => {
                        mutation.addedNodes.forEach((node) => {
                            if (node.classList?.contains('eudic_custom_night')) node.remove();
                        });
                    });
                }).observe($oaldpe.parent()[0], { childList: true });
                $oaldpe.parent().attr('observer-attached', 'true');
            }

            // Set the theme based on the body's class
            const setEudicTheme = () => $oaldpe.attr('data-theme', $('body').is('.black, .night') ? 'dark' : 'light');
            setEudicTheme(); // Initial check
            new MutationObserver((mutationsList) => {
                mutationsList.forEach((mutation) => {
                    if (mutation.attributeName === 'class') {
                        setEudicTheme();
                    }
                });
            }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
        }

        // region 全局选择器
        const $sense = $oaldpe.find('li.sense');
        const senseExpandSelector = '.examples, .collapse, .un, .xrefs, .topic-g';

        const senseMapping = $sense.map(function () {
            const $this = $(this);
            const $iteration = $this.children('.iteration');
            const $senseExpand = $iteration.siblings(senseExpandSelector);
            const $senseDefinition = $iteration.siblings().not($senseExpand);

            return {
                $sense: $this,
                $iteration: $iteration,
                $senseExpand: $senseExpand,
                $senseDefinition: $senseDefinition
            };
        }).get();

        const $allSenseExpand = $(senseMapping.map(mapping => mapping.$senseExpand.get()).flat());
        const $allSenseDefinition = $(senseMapping.map(mapping => mapping.$senseDefinition.get()).flat());

        const $chn = $oaldpe.find('chn');
        const $allExample = $oaldpe.find('.examples > li');
        const $exampleChn = $allExample.find('chn'); // 例句中文
        const $definitionChn = $allSenseDefinition.find('chn'); // 释义中文

        // region 中文翻译相关
        // fnExamplesChineseBeAlone();

        // setImgAttributes();

        // fnShowTranslation();

        // fnTouchToTranslate();

        // replaceFullWidthCharsInChn();

        function fnExamplesChineseBeAlone() {
            if (!oaldpeConfig.examplesChineseBeAlone) {
                $exampleChn.css('display', 'inline');
                $exampleChn.parent().css('margin-left', '4px');
            }
        }

        function setImgAttributes() {
            $oaldpe.find('.fullsize, .thumb').each(function () {
                const $img = $(this);
                const src = $img.data('src');

                const [baseName, extension] = src.split('.');

                $img.attr({
                    'data-root': $img.attr('src'),
                    'data-simplified': $img.attr('src').replace(src, `simplified/${baseName}_simplified.${extension}`),
                    'data-traditional': $img.attr('src').replace(src, `traditional/${baseName}_traditional.${extension}`)
                });
            });
        }

        function fnShowTranslation() {
            const option = oaldpeConfig.showTranslation;
            (option === 0) && $chn.hide(); // 全部隐藏
            // (option === 1) && $chn.show(); // 全部显示
            (option === 2) && $exampleChn.hide(); // 仅隐藏例句中文
            (option === 3) && $chn.not($exampleChn).hide(); // 仅显示例句中文
            (option === 4) && $definitionChn.hide(); // 仅隐藏释义中文
            (option === 5) && $chn.not($definitionChn).hide(); // 仅显示释义中文

            fnImgTranslationOpt();
        }

        function chineseToggle() {
            oaldpeConfig.showTranslation = oaldpeConfig.showTranslation === 0 ? 1 : 0;

            const option = oaldpeConfig.showTranslation;
            (option === 0) && $chn.fadeOut('fast'); // 全部隐藏
            (option === 1) && $chn.fadeIn('fast');  // 全部显示

            fnImgTranslationOpt();
        }

        function fnImgTranslationOpt() {
            // 图片翻译：0-不使用翻译 1-简体中文翻译 2-港版繁体翻译 3-自动选择
            const option = oaldpeConfig.imgTranslationOpt === 3
                ? (oaldpeConfig.showTranslation ? (oaldpeConfig.showTraditional ? 2 : 1) : 0)
                : oaldpeConfig.imgTranslationOpt;

            $oaldpe.find('.fullsize, .thumb').each(function () {
                const $img = $(this);
                $img.attr('src', [$img.data('root'), $img.data('simplified'), $img.data('traditional')][option]);
            });
        }

        function fnTouchToTranslate() {
            if (!oaldpeConfig.touchToTranslate) return;

            // 释义中文
            senseMapping.forEach(({ $sense, $senseDefinition }) => {
                $sense.on('click', function (event) {
                    event.stopPropagation();
                    if ($(event.target).is('.audio_play_button, .phon')) return;
                    const $definitionChn = $senseDefinition.find('chn');
                    $definitionChn.fadeToggle('fast');
                });
            });

            // 例句中文
            $allExample.on('click', function (event) {
                event.stopPropagation();
                if ($(event.target).is('.audio_play_button')) return;
                const $example = $(this);
                const $labelChn = $example.children('.labels').find('chn');
                const $exampleChn = $example.find('.x, .unx, .unx + undt').find('chn');
                oaldpeConfig.examplesChineseBeAlone ? $exampleChn.slideToggle('fast') : $exampleChn.fadeToggle('fast');
                $labelChn.fadeToggle('fast');
            });

            // 词头部分标签
            $oaldpe.find('.webtop').children('.inflections, .variants, .labels, .use').on('click', function (event) {
                if ($(event.target).is('.audio_play_button, .phon')) return;
                const $chn = $(this).find('chn');
                $chn.fadeToggle('fast');
            });

            // 释义 Shortcut
            $oaldpe.find('.shcut-g').on('click', function () {
                const $shcut = $(this).children('h2.shcut');
                const $chn = $shcut.find('chn');
                $chn.fadeToggle('fast');
            });

            /* 折叠块相关 */
            $oaldpe.find('.collapse .unbox .body, .un').on('click', function (event) { // 全局点击
                event.stopPropagation();
                if ($(event.target).is('.audio_play_button, .phon')) return;
                const $chn = $(this).find('chn');
                $chn.is(':visible') ? $chn.fadeOut('fast') : $chn.fadeIn('fast');
            });

            $oaldpe.find( // 折叠块标题
                '.collapse .unbox .box_title, ' +
                '.collapse .unbox .body .unbox'
            ).on('click', function (event) {
                event.stopPropagation();
                const $chn = $(this).find('chn');
                $chn.fadeToggle('fast');
            });

            $oaldpe.find( // 折叠块中文
                '.collapse .unbox .body > .p, ' +
                '.collapse .unbox .body > .deflist > .defpara, ' +
                '.collapse .unbox .body > ul.bullet > li'
            ).on('click', function (event) {
                event.stopPropagation();
                const $chn = $(this).children('undt, ubx').find('chn');
                $chn.fadeToggle('fast');
            });
        }

        function replaceFullWidthCharsInChn() {
            const replacements = { '／': '/' };

            $chn.each(function () {
                const $this = $(this);
                const $target = $this.children().length ? $this.children().first() : $this;
                $target.text($target.text().replace(/／/g, replacements['／']));
            });
        }

        // region 发音，图片显示
        const globalAudio = new Audio();

        setupWordPron();

        setupImage();

        setupExamplePron();

        function getOnlineWordPronUrl(src) {
            const name = src.split('/').pop();
            const prefix = name.indexOf('_gb_') > -1 ? OALDPE_PREFIX_WORD_UK : OALDPE_PREFIX_WORD_US;
            return `${prefix}${name.slice(0, 1)}/${name.slice(0, 3)}/${name.slice(0, 5)}/${name}`;
        }

        function getOnlineImageUrl(src) {
            const filename = src.split('/').pop();
            const name = filename.replace(/^(fullsize|thumb)_/g, '')
            const namePath = name.split('.')[0].padEnd(5, '_');
            const prefix = filename.split('_')[0] === 'fullsize' ? OALDPE_PREFIX_FULL_IMAGE : OALDPE_PREFIX_THUMB_IMAGE;
            return `${prefix}${namePath.slice(0, 1)}/${namePath.slice(0, 3)}/${namePath.slice(0, 5)}/${name}`;
        }

        function getOnlineExamplePronUrl(src) {
            const name = src.split('/').pop();
            const prefix = OALDPE_PREFIX_EXAMPLE;
            return `${prefix}${name.replace('#', '%23').replace('.mp3', '.wav')}`;
        }

        function setupWordPron() {
            $oaldpe.find('.audio_play_button').not('.app, .app-ext').each(function () {
                const $audio = $(this);
                const $phon = $audio.next('.phon');
                $phon.on('click', () => $audio[0].click());

                if (oaldpeConfig.onlineWordPron) {
                    $audio.attr('data-href', getOnlineWordPronUrl($audio.attr('href')));
                    $audio.on('click', function (event) {
                        event.stopPropagation();
                        event.preventDefault();
                        globalAudio.pause();
                        globalAudio.src = $audio.data('href');
                        globalAudio.play();
                    });
                }
            });
        }

        function setupImage() {
            $oaldpe.find('div[id="ox-enlarge"]').each(function () {
                const $imgContainer = $(this);

                $imgContainer.find('.fullsize, .thumb').each(function () {
                    const $img = $(this);
                    if (oaldpeConfig.onlineImage) {
                        $img.attr('src', getOnlineImageUrl($img.data('src')));
                    }
                });

                $imgContainer.on('click', function (event) {
                    event.stopPropagation();
                    $imgContainer.toggleClass('enlarged');
                });
            });
        }

        function setupExamplePron() {
            // 不启用官方例句发音
            if (oaldpeConfig.officialExPronOpt === 2) return;

            // 启用官方例句在线发音
            if (oaldpeConfig.officialExPronOpt === 1) {
                $oaldpe.attr('online-example-pron', 'true');
            }

            $oaldpe.find('.audio_play_button').filter('.app, .app-ext').each(function () {
                const $audio = $(this);

                if ($audio.closest('.examples').length) {
                    const $example = $audio.closest('li');
                    if ($audio.is('.pron-uk')) $example.attr('pron-uk', 'true');
                    if ($audio.is('.pron-us')) $example.attr('pron-us', 'true');
                }

                if (!$audio.is('.app-ext')) {
                    $audio.attr('data-href', getOnlineExamplePronUrl($audio.attr('href')));
                    $audio.on('click', function (event) {
                        const online = $oaldpe.attr('online-example-pron') === 'true';

                        if (online) {
                            event.stopPropagation();
                            event.preventDefault();
                            globalAudio.pause();

                            console.log(`(online) audio: ${$audio.data('href')}`);
                            globalAudio.src = $audio.data('href');
                            globalAudio.play();
                        }
                    });
                }
            });
        }

        // region 内容显示
        fnSimplifyPos();

        fnSimplifyGrammar();

        fnSimplifySthSb();

        fnUsePlaceholder();

        fnPhrasesAddUnderline();

        function fnSimplifyPos() {
            if (oaldpeConfig.simplifyPos) {
                $oaldpe.find('.pos').each(function () {
                    const $this = $(this);
                    $this.text(OALDPE_POS[$this.text()]);
                });
            }
        }

        function fnSimplifyGrammar() {
            if (oaldpeConfig.simplifyGrammar) {
                $oaldpe.find('.grammar').each(function () {
                    const $this = $(this);
                    $this.text(OALDPE_GRAMMAR[$this.text()]);
                });
            }
        }

        function fnSimplifySthSb() {
            if (oaldpeConfig.simplifySthSb) {
                const replacements = { 'something': 'sth.', 'somebody': 'sb.' };

                $oaldpe.find('.cf, .idm').contents().filter((_, node) => node.nodeType === Node.TEXT_NODE).each(function () {
                    this.nodeValue = this.nodeValue.replace(/something|somebody/g, match => replacements[match]);
                });
            }
        }

        function fnUsePlaceholder() {
            if (oaldpeConfig.usePlaceholder) {
                $oaldpe.find('.oald').each(function () {
                    const $oald = $(this);
                    const $webtop = $oald.find('.entry > .top-container .webtop');
                    const headword = $webtop.children('.headword').text().replace(/·/g, '');
                    $oald.find('.cf').contents().filter((_, node) => node.nodeType === Node.TEXT_NODE).each(function () {
                        this.nodeValue = this.nodeValue.replace(headword, '~');
                    });
                });
            }
        }

        function fnPhrasesAddUnderline() {
            if (oaldpeConfig.phrasesAddUnderline) {
                $oaldpe.find('.cf').addClass('underline');
            }
        }

        // region 折叠控制
        setupShcutFold();

        setupSenseFold();

        setupUnboxFold();

        setupPhraseSections();

        initCollapse();

        function setupShcutFold() {
            $oaldpe.find('h2.shcut').on('click', function (event) {
                event.stopPropagation();
                const $shcut = $(this);
                $shcut.parent('.shcut-g').toggleClass('folded');
                $shcut.siblings('li.sense').slideToggle('fast');
            });
        }

        function setupSenseFold() {
            senseMapping.forEach(({ $iteration, $senseExpand }) => {
                if (!$senseExpand.length) return;
                $iteration.css('cursor', 'pointer').addClass('clickable').on('click', function (event) {
                    event.stopPropagation();
                    $iteration.toggleClass('folded');
                    $senseExpand.slideToggle('fast');
                });

                if (!oaldpeConfig.unfoldSense) {
                    $iteration.addClass('folded');
                    $senseExpand.hide();
                }
            });

            if (!oaldpeConfig.unfoldSense) {
                $oaldpe.attr('concise', 'true');
            }

            $oaldpe.find('.idm, .pv').each(function () {
                const $heading = $(this);
                const $container = $heading.closest('.idm-g, .pv-g');
                const $iteration = $container.find('.iteration').filter('.clickable');
                $heading.on('click', () => ($iteration.filter('.folded').length ? $iteration.filter('.folded') : $iteration).trigger('click'));
            });
        }

        function setupUnboxFold() {
            $oaldpe.find('.collapse .unbox .box_title').each(function () {
                const $boxTitle = $(this);
                const $content = $boxTitle.next();
                const $unbox = $boxTitle.parent();

                $boxTitle.on('click', function (event) {
                    event.stopPropagation();
                    $unbox.hasClass('is-active')
                        ? $content.css('display', 'block').slideUp(300)
                        : $content.css('display', 'block').hide().slideDown(300);
                    $unbox.toggleClass('is-active');
                });

                if (oaldpeConfig.unfoldUnbox || oaldpeConfig.autoUnfoldUnbox[$unbox.attr('unbox')]) {
                    $content.css('display', 'block');
                    $unbox.addClass('is-active');

                    if (oaldpeConfig.touchToTranslate) { // Consistent with touchToTranslate
                        $boxTitle.find('chn').show();
                    }
                }
            });
        }

        function setupPhraseSections() {
            function scrollToTarget($target, offset = 100, complete = () => { }) {
                $('html, body').animate({
                    scrollTop: $target.offset().top - offset
                }, 500, complete);
            }

            $oaldpe.find('.idioms, .phrasal_verb_links').each(function () {
                const $section = $(this);
                const $heading = $section.is('.idioms') ? $section.children('.idioms_heading') : $section.children('.unbox');
                const $content = $section.children().not($heading);
                const $jumpLink = $section.closest('.entry').find(`.jumplink[name="${$heading.text()}"]`);
                const $backLink = $('<span>', { class: $section.is('.idioms') ? 'idioms_back' : 'phrasal_back' }).appendTo($heading);

                $heading.on('click', function () {
                    $section.hasClass('expanded')
                        ? $content.css('display', 'block').fadeOut('fast')
                        : $content.css('display', 'block').hide().fadeIn('fast');
                    $section.toggleClass('expanded');
                });

                if (oaldpeConfig.unfoldPhraseSections) {
                    $content.css('display', 'block');
                    $section.addClass('expanded');
                }

                $jumpLink.on('click', function (event) {
                    event.preventDefault();
                    scrollToTarget($section, undefined, function () {
                        if (oaldpeConfig.jumpsUnfold && !$section.hasClass('expanded')) {
                            $heading.trigger('click');
                        }
                    });
                });

                $backLink.on('click', function (event) {
                    event.stopPropagation();
                    scrollToTarget($jumpLink, undefined, function () {
                        if (oaldpeConfig.leavesFold && $section.hasClass('expanded')) {
                            $heading.trigger('click');
                        }
                    });
                });
            });
        }

        function initCollapse() {
            const $allIteration = $oaldpe.find('.iteration').filter('.clickable');
            const $shcut = $oaldpe.find('h2.shcut');
            const $boxTitle = $oaldpe.find('.collapse .unbox .box_title');
            const $phraseSectionHeading = $oaldpe.find('.idioms > .idioms_heading, .phrasal_verb_links > .unbox');

            let clickTimer;
            const $gear_icon = $oaldpe.find('.oaldpe-config-gear__head__icon');

            $gear_icon.on('click', function () {
                clearTimeout(clickTimer);
                clickTimer = setTimeout(chineseToggle, 250);
            });

            $gear_icon.on('dblclick', function () {
                clearTimeout(clickTimer);

                if ($oaldpe.attr('concise') === 'true') {
                    $oaldpe.removeAttr('concise');

                    // 展开所有
                    $allIteration.filter('.folded').trigger('click');
                    $shcut.filter((_, e) => $(e).parent('.shcut-g').hasClass('folded')).trigger('click');
                    $phraseSectionHeading.filter((_, e) => !$(e).parent().hasClass('expanded')).trigger('click');
                } else {
                    $oaldpe.attr('concise', 'true');

                    // 折叠所有
                    $allIteration.not('.folded').trigger('click');
                    $boxTitle.filter((_, e) => $(e).parent('.unbox').hasClass('is-active')).trigger('click');
                    $phraseSectionHeading.filter((_, e) => $(e).parent().hasClass('expanded')).trigger('click');
                }
            });
        }
    });

    // region Helper functions
    window.copyToClipboard = function (text) {
        const $temp = $('<textarea>').val(text).appendTo('body').select();
        document.execCommand('copy');
        $temp.remove();
    };

    function isEudic() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('eudic') > -1;
    }

    function isEudicAPP() {
        var ua = navigator.userAgent.toLowerCase();
        return (ua.indexOf('eudic') > -1) && (ua.indexOf('android') > -1 || ua.indexOf('iphone') > -1);
    }

    function isGoldenDict() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('goldendict') > -1;
    }

    function isMacosIpadSim() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf('ipad') > -1 && navigator.maxTouchPoints === 0;
    }

    function isPreview() {
        return window.self !== window.top && parent.document.querySelector('#k_iframe');
    }
    ox10Wing();
};

function ox10Wing(){
    $('.phonetics .phons_br .phon').prepend('<span style="font-style: italic;">BrE:</span>');
    $('.phonetics .phons_n_am .phon').prepend('<span style="font-style: italic;">AmE:</span>');
}
$(ox10Main);