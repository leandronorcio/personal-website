import { resizeTextAreaHeight } from '~/lib/resizeTextAreaHeight';
import { mergeProps, useObjectRef } from '@react-aria/utils';
import { FormEvent, forwardRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { cn } from '~/lib/cn';
import { LucideIcon } from 'lucide-react';

interface TextareaProps extends AriaTextFieldProps {
  className?: string;
  Icon?: LucideIcon;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, Icon, ...props }, forwardedRef) => {
    // Support forwarded refs: https://github.com/adobe/react-spectrum/pull/2293#discussion_r714337674
    const ref = useObjectRef(forwardedRef);
    let { labelProps, inputProps, errorMessageProps } = useTextField(
      { inputElementType: 'textarea', ...props },
      ref,
    );
    const { errorMessage, label } = props;
    const isError = errorMessage !== undefined;

    const clear = () => {
      // Set the input value to an empty string and resize the textarea
      ref.current.value = '';
      resizeTextAreaHeight(ref.current);
      // If `onChange` is provided, invoke it with an empty string
      props.onChange && props.onChange('');
    };

    return (
      <>
        <div className="relative">
          {Icon && (
            <div className="absolute left-5 top-[50%] translate-y-[-50%]">
              <Icon
                className={cn(
                  isError
                    ? 'stroke-destructive-foreground'
                    : 'stroke-muted-foreground',
                )}
                width={24}
                height={24}
              />
            </div>
          )}
          <textarea
            {...mergeProps(inputProps, {
              onInput: (e: FormEvent<HTMLTextAreaElement>) => {
                const textarea = e.target as HTMLTextAreaElement;
                resizeTextAreaHeight(textarea);
              },
              rows: 1,
              placeholder: ' ',
            })}
            ref={ref}
            className={cn(
              'peer block w-full resize-none overflow-hidden rounded-2xl bg-input pb-2 pr-5 pt-8 outline-none ring-foreground focus:ring-2',
              Icon ? 'pl-16' : 'pl-5',
              isError && 'bg-destructive ring-destructive/30 focus:ring-4',
              className,
            )}
            rows={1}
            placeholder=" "
          />
          <label
            className={cn(
              'absolute top-[9px] z-0 translate-y-0 cursor-text text-sm transition-all peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-lg peer-focus:top-[9px] peer-focus:translate-y-0 peer-focus:text-sm',
              Icon ? 'left-16' : 'left-5',
              isError ? 'text-destructive-foreground' : 'text-muted-foreground',
            )}
            {...labelProps}
          >
            {label}
          </label>
        </div>
        {isError && (
          <p
            className="mt-2 font-medium text-foreground"
            {...errorMessageProps}
          >
            {errorMessage}
          </p>
        )}
      </>
    );
  },
);
