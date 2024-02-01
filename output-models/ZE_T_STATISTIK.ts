import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_STATISTIKAttributes {
    L_SORTIERUNG?: number;
    FLT_KRANK?: number;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    STR_MONAT?: string;
    FLT_GANZERFTAG?: number;
    L_JAHR?: number;
    FLT_SONDERURLAUB?: number;
    STRID: string;
    DTINSERT?: Date;
    FLT_URLAUB?: number;
    FLT_DIENTBEFREIUNG?: number;
    LUSERID?: number;
    FLT_AZVTAG?: number;
    FLT_GLEITTAG?: number;
    FLT_REHABILITATION?: number;
    FLT_TELEARBEIT?: number;
    FLT_HOMEOFFICE?: number;
}

@Table({
	tableName: "ZE_T_STATISTIK",
	timestamps: false 
})
export class ZE_T_STATISTIK extends Model<ZE_T_STATISTIKAttributes, ZE_T_STATISTIKAttributes> implements ZE_T_STATISTIKAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SORTIERUNG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_KRANK?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_MONAT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_GANZERFTAG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_JAHR?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_SONDERURLAUB?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_URLAUB?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_DIENTBEFREIUNG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_AZVTAG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_GLEITTAG?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_REHABILITATION?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_TELEARBEIT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.FLOAT(53) 
    })
    	FLT_HOMEOFFICE?: number;

}