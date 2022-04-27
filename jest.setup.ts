import "@testing-library/jest-dom/extend-expect";
import { matchers, createSerializer } from "@emotion/jest";

expect.addSnapshotSerializer(createSerializer());
expect.extend(matchers);
