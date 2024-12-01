export interface categoryOptions {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
export const categoryOptions: readonly categoryOptions[] = [
    { value: 'Шкафы', label: 'Шкаф', color: '#00B8D9',  },
    { value: 'Столы', label: 'Мебель', color: '#0052CC',  },
    { value: 'Стулья', label: 'Шкаф', color: '#5243AA' },
    { value: 'Тумбочки', label: 'Шкаф', color: '#FF5630',  },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];