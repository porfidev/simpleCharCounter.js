/// <reference types="jquery" />

declare module '@porfidev/simple-char-counter' {
  // Opciones que acepta tu plugin
  export interface SimpleCharCounterOptions {
    max?: number;
    color?: string;
    warnColor?: string;
    label?: string | JQuery | HTMLElement;
    threshold?: number;
    displayMode?: 'normal' | 'write';
    onEmpty?: 'none' | string;
    legend?: string;
    strictText?: boolean;
  }
}

// Extendemos la interface de JQuery para agregar el plugin
declare module 'jquery' {
  import { SimpleCharCounterOptions } from '@porfidev/simple-char-counter';

  interface SimpleCharCounterInstance<TElement = HTMLElement> extends JQuery<TElement> {
    /**
     * Devuelve si el elemento actual cumple con el límite de caracteres.
     */
    isValid(): boolean;
  }

  interface JQuery<TElement = HTMLElement> {
    /**
     * Inicializa el contador de caracteres en el/los elemento(s) seleccionados.
     */
    simpleCharCounter(
      options?: SimpleCharCounterOptions,
    ): SimpleCharCounterInstance<TElement>;
  }
}
