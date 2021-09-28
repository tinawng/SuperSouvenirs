import Vue from 'vue'

Vue.directive('anim', {
  inserted: (element) => {

    // `element` is the element you want to wrap
    var parent = element.parentNode;
    var wrapper = document.createElement('div');

    // set the wrapper as child (instead of the element)
    parent.replaceChild(wrapper, element);
    // set element as child of wrapper
    wrapper.appendChild(element);
  }
})

// Vue.directive('anim', {
//     bind: (el, binding) => {
//       if (!binding.value) return
//       const item = {
//         id: Vue.scrollManager.generateId(),
//         el: el,
//         offset: binding.value.offset !== null ? binding.value.offset : 50
//       }
//       if (typeof binding.value.in === 'function') item.in = binding.value.in
//       if (typeof binding.value.out === 'function') item.out = binding.value.out
//       if (binding.value.toggle) item.toggle = true
//       if (typeof binding.value.class === 'string') {
//         el.classList.add('anim')
//         item.class = true
//         const transitions = []
//         binding.value.class.split(',').forEach(type => {
//           const values = type.replace(/ /g, '').split('_')
//           // ADD animation types here !
//           el.classList.add(`anim--${values[0]}`)
//           if (values[0].includes('fade')) {
//             transitions.push(`opacity ${values[1] || 0.5}s ${values[2] || 'ease'} ${values[3] || 0}s`)
//           }
//           if (values[0].includes('slide')) {
//             transitions.push(`transform ${values[1] || 0.5}s ${values[2] || 'ease'} ${values[3] || 0}s`)
//             let x = '0'
//             let y = '0'
//             for (let i = 4; i < values.length; i++) {
//               if (values[i].includes('l')) x = `-${values[i].replace('l', '')}`
//               if (values[i].includes('r')) x = values[i].replace('r', '')
//               if (values[i].includes('t')) y = `-${values[i].replace('t', '')}`
//               if (values[i].includes('b')) y = values[i].replace('b', '')
//             }
//             el.style.setProperty('--slide-translate', `translate3d(${x}px, ${y}px, 0)`)
//           }
//         })
//         el.style.setProperty('--anim-transitions', transitions.join(','))
//       }
//       Vue.scrollManager.add(item)
//     }
//   })