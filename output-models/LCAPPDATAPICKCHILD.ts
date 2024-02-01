import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPDATAPICKCHILDAttributes {
    STRGUID: string;
    STRAPPFIELDGUID?: string;
    BISMATCH: number;
    STRDATAPICKGUID: string;
    STRCONTROLGUID?: string;
    STRCONTROLTYPE?: string;
    STRSORTORDER?: string;
    LSORTPOS?: number;
    TXTSETTINGS?: string;
}

@Table({
	tableName: "LCAPPDATAPICKCHILD",
	timestamps: false 
})
export class LCAPPDATAPICKCHILD extends Model<LCAPPDATAPICKCHILDAttributes, LCAPPDATAPICKCHILDAttributes> implements LCAPPDATAPICKCHILDAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(40) 
    })
    	STRGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRAPPFIELDGUID?: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BISMATCH!: number;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRDATAPICKGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRCONTROLGUID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRCONTROLTYPE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRSORTORDER?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LSORTPOS?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXTSETTINGS?: string;

}