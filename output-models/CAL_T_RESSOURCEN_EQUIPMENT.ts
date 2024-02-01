import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_RESSOURCEN_EQUIPMENTAttributes {
    FKSTRID?: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    REF_EQUIPMENT?: string;
    LID: number;
    DTEDIT?: Date;
    DTINSERT?: Date;
}

@Table({
	tableName: "CAL_T_RESSOURCEN_EQUIPMENT",
	timestamps: false 
})
export class CAL_T_RESSOURCEN_EQUIPMENT extends Model<CAL_T_RESSOURCEN_EQUIPMENTAttributes, CAL_T_RESSOURCEN_EQUIPMENTAttributes> implements CAL_T_RESSOURCEN_EQUIPMENTAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_EQUIPMENT?: string;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

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

}