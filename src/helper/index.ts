export const formatRupiah = (num: number | string) => {
    const formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp. ${formatted}`
};