import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_RESSOURCEN_BESTUHLAttributes {
    L_MAXIMALEANZAHLSITZPLAETZE?: number;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    DTEDIT?: Date;
    B_STANDARDBESTUHLUNG?: boolean;
    REF_BESTUHLUNG?: string;
    FKSTRID?: string;
    L_RUESTZEITINMINUTEN?: number;
    LUSERID?: number;
    STRID: string;
}

@Table({
	tableName: "CAL_T_RESSOURCEN_BESTUHL",
	timestamps: false 
})
export class CAL_T_RESSOURCEN_BESTUHL extends Model<CAL_T_RESSOURCEN_BESTUHLAttributes, CAL_T_RESSOURCEN_BESTUHLAttributes> implements CAL_T_RESSOURCEN_BESTUHLAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_MAXIMALEANZAHLSITZPLAETZE?: number;

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
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_STANDARDBESTUHLUNG?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_BESTUHLUNG?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_RUESTZEITINMINUTEN?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}