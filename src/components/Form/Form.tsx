import {
  FormikProvider,
  useFormik,
  type FormikConfig,
  type FormikProps,
} from "formik";
import type { ReactNode } from "react";
import * as Yup from "yup";

interface AppFormProps<T extends Yup.Maybe<Yup.AnyObject>> {
  initialValues: T;
  validationSchema: Yup.ObjectSchema<T>;
  onSubmit: FormikConfig<T>["onSubmit"];
  render: (formik: FormikProps<T>) => ReactNode;
}

const AppForm = <T extends object>({
  initialValues,
  validationSchema,
  onSubmit,
  render,
}: AppFormProps<T>) => {
  const formik = useFormik<T>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return <FormikProvider value={formik}>{render(formik)}</FormikProvider>;
};

export default AppForm;
