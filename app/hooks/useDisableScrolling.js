


export const  useDisableScrolling = () => {

    window.onscroll = function() {
    window.scrollTo(0, 0);
    };
}

export const  useEnableScrolling = () => {
    window.onscroll = function() {};
}