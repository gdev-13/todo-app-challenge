import IconSun from '/images/icon-sun.svg'
import IconMoon from '/images/icon-moon.svg'

export const themeConfig = {
    light: {
        name: "light",
        layout: {
            backgroundColor: "bg--light-gray-300",
            textColor: "text-light-gray-600"
        },
        todo: {
            backgroundColor: "bg-light-gray-50",
            borderColor: "border-dark-purple-300",
            textColor: "text-light-navy-850"
        },
        icon: IconMoon
    },
    dark: {
        name: "dark",
        layout: {
            backgroundColor: "bg--dark-blue-950",
            textColor: "text-dark-purple-700"
        },
        todo: {
            backgroundColor: "bg-dark-navy-900",
            borderColor: "border-light-navy-850",
            textColor: "text-dark-purple-100"
        },
        icon: IconSun
    }
}