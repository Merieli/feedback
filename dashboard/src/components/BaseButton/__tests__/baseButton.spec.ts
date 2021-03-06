import BaseButton from '@/components/BaseButton/index.vue'
import { ButtonColorTypes } from '@/components/BaseButton/module'
import { mount, VueWrapper } from '@vue/test-utils'

describe('BaseButton', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
        wrapper = mount(BaseButton, {
            slots: {
                default: 'Ação X',
            },
            props: {},
        })
    })

    afterEach(() => {
        wrapper.unmount()
    })

    describe('Unidade', () => {
        test('Dado o componente quando for montado deve ser uma instancia vue', async () => {
            expect(wrapper.vm).toBeDefined()
        })

        test('Dado o preenchimento do slot quando definido um texto "Ação X" deve retornar esse texto no componente', async () => {
            const button = wrapper.find('button.base-button')

            expect(button.html()).toContain('Ação X')
        })

        test('Dado a prop color quando definida como "dark" deve retornar a classe "base-button_dark"', async () => {
            await wrapper.setProps({ color: ButtonColorTypes.DARK })

            expect(wrapper.classes()).toContain('base-button_dark')
        })

        test('Dado a prop color quando definida como "light" deve retornar a classe "base-button_light"', async () => {
            await wrapper.setProps({ color: ButtonColorTypes.LIGHT })

            expect(wrapper.classes()).toContain('base-button_light')
        })
    })
})
