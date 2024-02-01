import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCLINKEDELEMENTAttributes {
    STRHOOKGUID: string;
    STRTYPE: string;
    STRROLE: string;
    STRAPPGUID: string;
    STRGUID: string;
    STRLINKGUID: string;
}

@Table({
	tableName: "LCLINKEDELEMENT",
	timestamps: false 
})
export class LCLINKEDELEMENT extends Model<LCLINKEDELEMENTAttributes, LCLINKEDELEMENTAttributes> implements LCLINKEDELEMENTAttributes {

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRHOOKGUID!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRTYPE!: string;

    @Column({
    	type: DataType.STRING(255) 
    })
    	STRROLE!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRLINKGUID!: string;

}