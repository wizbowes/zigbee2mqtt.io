"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31899],{57361:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-0042ba45",path:"/devices/H1.html",title:"Ubisys H1 control via MQTT",lang:"en-US",frontmatter:{title:"Ubisys H1 control via MQTT",description:"Integrate your Ubisys H1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-08-01T15:06:58.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Turning off",slug:"turning-off",children:[]},{level:3,title:"Vacation Mode",slug:"vacation-mode",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Vacation_mode (binary)",slug:"vacation-mode-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/H1.md",git:{updatedTime:1662362265e3}}},85389:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var a=i(66252);const o=(0,a.uE)('<h1 id="ubisys-h1" tabindex="-1"><a class="header-anchor" href="#ubisys-h1" aria-hidden="true">#</a> Ubisys H1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>H1</td></tr><tr><td>Vendor</td><td>Ubisys</td></tr><tr><td>Description</td><td>Heating regulator</td></tr><tr><td>Exposes</td><td>battery, climate (system_mode, running_mode, occupied_heating_setpoint, local_temperature, pi_heating_demand), vacation_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/H1.jpg" alt="Ubisys H1"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>You can get a detailed user manual on the (https://www.ubisys.de/en/support/manuals-catalogs/)[ubisys] website.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><h4 id="initial-pairing" tabindex="-1"><a class="header-anchor" href="#initial-pairing" aria-hidden="true">#</a> Initial pairing</h4><ol><li>make sure the H1 is mounted securely</li><li>enable joining in zigbee2mqtt</li><li>remove the plastic battery tab</li><li>wait, the TRV will first calibrate, after this is successful it will automatically try to join</li></ol><p>If the display remains blank, try replacing the batteries. Mine shipped with empty batteries.</p><h4 id="pairing-after-the-device-has-been-calibrated" tabindex="-1"><a class="header-anchor" href="#pairing-after-the-device-has-been-calibrated" aria-hidden="true">#</a> Pairing after the device has been calibrated</h4><ol><li>press the button to wake the display</li><li>press and hold the button for 10 seconds with the display wake</li><li>turn the dial until you see the &#39;factory reset&#39; icon (gear with a arrow around it)</li><li>press the button once (icon should be flashing)</li><li>turn the dial until you see checkmark next to the icon</li><li>enable joining in zigbe2mqtt</li><li>press the button to confirm (the device will now reset, re-calibrate, and try to join)</li></ol><h3 id="turning-off" tabindex="-1"><a class="header-anchor" href="#turning-off" aria-hidden="true">#</a> Turning off</h3><p>You can turn off the H1 by setting the <code>system_mode</code> to <code>off</code> or by using the on device menu, the device will now be in frost protection mode and will not execute any schedules or try and heat to the setpoint.</p><p>You can turn on the device again by setting <code>system_mode</code> to <code>heat</code> or by turning the dial on the device.</p><h3 id="vacation-mode" tabindex="-1"><a class="header-anchor" href="#vacation-mode" aria-hidden="true">#</a> Vacation Mode</h3><p>You cannot put the device in vacation mode over zigbee. This will always have to be done using the on device menu. The status will be visible in the device state.</p><p>When in vacation mode (occupied heating) setpoint and schedule will be ignored. It will keep the room at 16ºC by default, however this can be changed by setting the unoccupied heating setpoint.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mosquitto_pub -t zigbee2mqtt/<span class="token operator">&lt;</span>friendly_name<span class="token operator">&gt;</span>/set/unoccupied_heating_setpoint -m <span class="token number">14</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',18),d=(0,a.Uk)("This device supports OTA updates, for more information see "),n=(0,a.Uk)("OTA updates"),s=(0,a.Uk)("."),c=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),r=(0,a.Uk)("How to use device type specific configuration"),l=(0,a.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>system_mode</code>, <code>running_mode</code>, <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li></ul><h3 id="vacation-mode-binary" tabindex="-1"><a class="header-anchor" href="#vacation-mode-binary" aria-hidden="true">#</a> Vacation_mode (binary)</h3><p>When Vacation Mode is active the schedule is disabled and unoccupied_heating_setpoint is used.. Value can be found in the published state on the <code>vacation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;vacation_mode&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> vacation_mode is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),h={},u=(0,i(83744).Z)(h,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[d,(0,a.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[n])),_:1}),s]),c,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[r])),_:1})])]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);