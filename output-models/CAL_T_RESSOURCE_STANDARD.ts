import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_RESSOURCE_STANDARDAttributes {
    FKSTRID?: string;
    DTEDIT?: Date;
    LID: number;
    ID?: string;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    REF_EQUIPMENT?: string;
    LUSERID?: number;
}

@Table({
	tableName: "CAL_T_RESSOURCE_STANDARD",
	timestamps: false 
})
export class CAL_T_RESSOURCE_STANDARD extends Model<CAL_T_RESSOURCE_STANDARDAttributes, CAL_T_RESSOURCE_STANDARDAttributes> implements CAL_T_RESSOURCE_STANDARDAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	ID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_EQUIPMENT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}