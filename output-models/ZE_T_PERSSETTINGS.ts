import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface ZE_T_PERSSETTINGSAttributes {
    STR_STARTWERT?: string;
    DT_VORGABEFUERENDEZEIT?: Date;
    L_STARTWERTINMINUTEN?: number;
    DT_VORGABEFUERBEGINNZEIT?: Date;
    LUSERIDINSERT?: number;
    STRID: string;
    LUSERID?: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
    TXT_BUCHUNGSARTEN?: string;
}

@Table({
	tableName: "ZE_T_PERSSETTINGS",
	timestamps: false 
})
export class ZE_T_PERSSETTINGS extends Model<ZE_T_PERSSETTINGSAttributes, ZE_T_PERSSETTINGSAttributes> implements ZE_T_PERSSETTINGSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_STARTWERT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VORGABEFUERENDEZEIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_STARTWERTINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DT_VORGABEFUERBEGINNZEIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(-1) 
    })
    	TXT_BUCHUNGSARTEN?: string;

}