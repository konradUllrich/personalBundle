import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPFORMAttributes {
    STRGUID: string;
    STRAPPGUID: string;
    STRJSON: string;
}

@Table({
	tableName: "LCAPPFORM",
	timestamps: false 
})
export class LCAPPFORM extends Model<LCAPPFORMAttributes, LCAPPFORMAttributes> implements LCAPPFORMAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

    @Column({
    	type: DataType.STRING(-1) 
    })
    	STRJSON!: string;

}