import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface LCAPPDIMAttributes {
    STRGUID: string;
    STRAPPGUID: string;
    STRCONTROLNAME?: string;
    STRAPPFUPGUID: string;
    BACTIVATED: number;
    BISCHILD: number;
    STRDRSELECTGUID: string;
    STRDRINSERTGUID?: string;
    STRDRUPDATEGUID: string;
    STRLANGCONSTTITLE?: string;
    STRLANGCONSTDESCRIPTION?: string;
}

@Table({
	tableName: "LCAPPDIM",
	timestamps: false 
})
export class LCAPPDIM extends Model<LCAPPDIMAttributes, LCAPPDIMAttributes> implements LCAPPDIMAttributes {

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
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STRCONTROLNAME?: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRAPPFUPGUID!: string;

    @Column({
    	type: DataType.INTEGER 
    })
    	BACTIVATED!: number;

    @Column({
    	type: DataType.INTEGER 
    })
    	BISCHILD!: number;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRDRSELECTGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(40) 
    })
    	STRDRINSERTGUID?: string;

    @Column({
    	type: DataType.STRING(40) 
    })
    	STRDRUPDATEGUID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	STRLANGCONSTTITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(256) 
    })
    	STRLANGCONSTDESCRIPTION?: string;

}